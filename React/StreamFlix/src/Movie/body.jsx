import axios from "axios";
import { useEffect, useState } from "react";
import { REACT_APP_API_KEY } from "../assets/movieDb.config.local";
import PaginationComponent from "./pagination";

const CardsComponent = (props) => {
  const { poster_path, vote_average, media_type, title, release_date, id } =
    props;
  console.log(props);
  return (
    <div className="cardDivContainer" key={id}>
      <div className="topCardContainer">
        <img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}
          alt="Card Img"
          className="cardImage"
          width={200}
          height={300}
        />
        <span className="ratingSpan">{vote_average}</span>
      </div>
      <div className="bottomCardContainer">
        <span className="titleCard">{title}</span>
        <div className="twoSpanCard">
          <span className="mediaTypeCard">{media_type}</span>
          <span className="releaseDateCard">{release_date}</span>
        </div>
      </div>
    </div>
  );
};

const MovieBodyComponent = () => {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${REACT_APP_API_KEY}&page=${page}`
      )
      .then((response) => {
        setdata(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [page]);
  console.log(data);

  return (
    <div>
      <div className="bodyContainer">
        {isLoading ? (
          <p>Loading</p>
        ) : (
          data.map((item) => {
            return (
              <CardsComponent
                key={item.id}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                media_type={item.media_type}
                title={item.title || item.name}
                release_date={item.release_date || item.first_air_date}
                id={item.id}
              />
            );
          })
        )}
      </div>
      <PaginationComponent setPage={setPage} />
    </div>
  );
};
export default MovieBodyComponent;
