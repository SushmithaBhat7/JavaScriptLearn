import axios from "axios";
import { REACT_APP_API_KEY } from "../assets/movieDb.config.local";
import { useEffect } from "react";
import { Chip } from "@mui/material";

const GenresComponent = ({
  type,
  selectedGenres,
  setSelectedGeners,
  setGenres,
  genres,
}) => {
  console.log("type : ", type);
  const fetchGeners = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };
  useEffect(() => {
    fetchGeners();
    return () => {
      setGenres({});
    };
  }, []);
  console.log(genres);
  return (
    <div>
      <p>Im Genere</p>
      <Chip />
      {genres &&
        genres.map((item) => {
          <Chip label={item.name} />;
        })}
    </div>
  );
};

export default GenresComponent;
