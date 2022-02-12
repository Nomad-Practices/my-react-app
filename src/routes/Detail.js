import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

function Detail() {
  const { id } = useParams();
  const getDetail = async () => {
    let response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    response = await response.json();
    console.log(response);
  };
  useEffect(() => getDetail(), []);
  return <h1>Detail</h1>;
}

export default Detail;
