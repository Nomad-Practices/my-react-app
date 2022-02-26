import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// 부모 컴포넌트에서 자식 컴포넌트로 부모 state 일부를 props로 전달할 수 있는데,
// 자식에 의해서 props가 변한다면 그에 반응하여 부모의 state 또한 set되고
// 그에 맞춰 부모 컴포넌트와 자식 컴포넌트는 re-rendering된다.

// props는 일반적인 html element의 attribute처럼 전달하면 자식 컴포넌트의 첫번째 인자로 객체형태로 전달된다.
// 또한 매우 신기하게도 함수도 props로 전달할 수 있다~

// 여기서 props로 전달하는 값이 변하지 않을 시,
// 해당 자식 컴포넌트의 re-rendering을 방지하기 위해서 React.memo() 메서드를 사용하여 성능을 개선할 수 있다.

function Movie({ title, id, medium_cover_image, genres, summary }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={medium_cover_image} alt={title} />
      <ul>
        {genres.map((g, index) => (
          <li key={index}>{g}</li>
        ))}
      </ul>
      <p>{summary.length > 235 ? `${summary.slice(235)}...` : summary}</p>
    </div>
  );
}

// props로 전달할 데이터의 종류와 타입은 PropTypes라는 패키지로 지정할 수 있다.
// 여기서 PropTypes로 전달하는 데이터는 default optional이고 만일 반드시 보내야 할 데이터 같은 경우 .isRequired를 붙인다.

// props의 주목적은 설정가능한 컴포넌트를 재사용하기 위함이다~!
// 또한 자식 컴포넌트에서 props에 변화를 주면 부모 컴포넌트에서 반응하여 자신의 state를 업데이트하여 전체적으로 re-rendering한다~!
Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  medium_cover_image: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  summary: PropTypes.string,
};
export default Movie;
