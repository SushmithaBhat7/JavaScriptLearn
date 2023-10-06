import MovieBodyComponent from "./body";

const MoviesComponent = () => {
  const urlPathMovies = "discover/movie";
  const type = "movie";
  const topText = "EXPLORE MOVIES";
  return (
    <div className="movieComponetContainer">
      <MovieBodyComponent
        urlPath={urlPathMovies}
        type={type}
        topText={topText}
      />
    </div>
  );
};
export default MoviesComponent;
