import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
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
