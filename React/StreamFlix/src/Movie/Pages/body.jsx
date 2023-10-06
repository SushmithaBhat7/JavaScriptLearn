import axios from "axios";
import { useEffect, useState } from "react";
import { REACT_APP_API_KEY } from "../../assets/movieDb.config.local";
import PaginationComponent from "../pagination";
import GenresComponent from "../genres";
import useGenres from "../../hooks/useGenres";
import ContentModal from "../ContentModal/contentModal";

const CardsComponent = (props) => {
  const { poster_path, vote_average, media_type, title, release_date, id } =
    props;
  return (
    <ContentModal media_type={media_type} id={id} key={id}>
      <div className="topCardContainer">
        <img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://screench.com/upload/no-poster.jpeg";
          }}
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
          <span className="mediaTypeCard">
            {media_type == "tv" ? "TV Series" : "Movies"}
          </span>
          <span className="releaseDateCard">{release_date}</span>
        </div>
      </div>
    </ContentModal>
  );
};

const MovieBodyComponent = ({ urlPath, query, type, topText }) => {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenres(selectedGenres);

  useEffect(() => {
    console.log(urlPath);
    axios
      .get(
        `https://api.themoviedb.org/3/${urlPath}?api_key=${REACT_APP_API_KEY}&page=${page}${query}&with_genres=${genreforURL}`
      )
      .then((response) => {
        setdata(response.data.results);
        setTotalPage(response.data.total_pages);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [page, urlPath, query, genreforURL]);

  return (
    <div>
      <div className="topBodyText">{topText !== null ? topText : ""}</div>
      {type !== "trending" && (
        <GenresComponent
          type={type}
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          setGenres={setGenres}
          genres={genres}
          setPage={setPage}
        />
      )}

      <div className="bodyContainer">
        {isLoading ? (
          <p>Loading</p>
        ) : (
          data.map((item) => {
            return (
              <>
                <CardsComponent
                  key={item.id}
                  poster_path={item.poster_path}
                  vote_average={item.vote_average}
                  media_type={item.media_type}
                  title={item.title || item.name}
                  release_date={item.release_date || item.first_air_date}
                  id={item.id}
                />
              </>
            );
          })
        )}
      </div>
      {totalPage > 1 && (
        <PaginationComponent setPage={setPage} totalPage={totalPage} />
      )}
    </div>
  );
};
export default MovieBodyComponent;
