import axios from "axios";
import { REACT_APP_API_KEY } from "../assets/movieDb.config.local";
import { useEffect } from "react";
import { Chip } from "@mui/material";
import { useState } from "react";

const GenresComponent = ({
  type,
  selectedGenres,
  setSelectedGenres,
  setGenres,
  genres,
  setPage,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleClick = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };
  const handleRemove = (genre) => {
    setSelectedGenres(selectedGenres.filter((s) => s.id !== genre.id));
    setGenres([...genres, genre]);
    setPage(1);
  };
  const fetchGeners = async () => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${REACT_APP_API_KEY}&language=en-US`
      )
      .then((response) => {
        setGenres(response.data.genres);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchGeners();
    return () => {
      setGenres({});
    };
  }, []);
  console.log("selectedGenres : ", selectedGenres);

  return (
    <div className="genresComponent">
      {Array.isArray(selectedGenres) &&
        selectedGenres.map((genre) => {
          return (
            <Chip
              className="genereChip"
              color="success"
              key={genre.id}
              label={genre.name}
              clickable
              onDelete={() => handleRemove(genre)}
            />
          );
        })}
      {isLoading ? (
        <p>Loading</p>
      ) : (
        Array.isArray(genres) &&
        genres.map((genre) => {
          return (
            <Chip
              className="genereChip"
              color="info"
              key={genre.id}
              label={genre.name}
              clickable
              onClick={() => handleClick(genre)}
            />
          );
        })
      )}
    </div>
  );
};

export default GenresComponent;
