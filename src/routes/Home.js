import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  // useState
  //컴포넌트의 다음 state를 현재 state를 기반으로 계산하려면
  // useState() 메서드에 현재 state를 인자로 받는 콜백함수를 전달한다~!
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);
  const getMovies = async () => {
    let response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    response = await response.json();
    setMovieList(response.data.movies);
    setLoading((curr) => !curr);
  };
  // useEffect
  // 컴포넌트의 state가 변할 때가 아닌 state의 변화에 상관없이 컴포넌트가 처음 render될 때, 딱 한번만 실행할 코드를 작성할 필요가 있다.
  // state가 변할 때마다 새로운 state를 기준으로 실행할 함수의 body가 방대하거나 api호출에 의한 지연을 방지하기 위해서가 아닐까...?

  // 컴포넌트가 처음 rendering 되었을 때를 포함해서 어느 특정 state에 변화가 있을 때만 실행할 코드는 useEffect hook을 사용하면 된다~~
  // 여기서 변화를 감지하고 있는(watch) 이 state를 해당 useEffect의 dependency라고 부르고
  // watch하는 state들 array는 useEffect의 2번째 argument로 전달한다.

  // useEffect의 subscription을 종료할 때 즉, 컴포넌트가 unmount될 때 실행할 로직은 useEffect의 EffectCallback에서 반환되는 함수로 구현한다.
  // 여기서 반환되는 함수를 cleanup function이라고 부르고 메모리 누수를 방지하기 위해 사용된다.
  useEffect(() => getMovies(), []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movieList.map((m) => (
          <Movie
            key={m.id}
            id={m.id}
            title={m.title}
            medium_cover_image={m.medium_cover_image}
            genres={m.genres}
            summary={m.summary}
          />
        ))
      )}
    </div>
  );
}

export default Home;
