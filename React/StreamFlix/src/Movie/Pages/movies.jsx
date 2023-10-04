import MovieBodyComponent from "./body";

const MoviesComponent = () => {
  const urlPathMovies = "discover/movie";
  const type = "movie";
  return (
    <div className="movieComponetContainer">
      <MovieBodyComponent urlPath={urlPathMovies} type={type} />
    </div>
  );
};
export default MoviesComponent;
