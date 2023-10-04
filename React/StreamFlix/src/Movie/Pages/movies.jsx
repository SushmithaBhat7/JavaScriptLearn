import MovieBodyComponent from "./body";

const MoviesComponent = () => {
  const urlPathMovies = "discover/movie";
  return (
    <div className="movieComponetContainer">
      <MovieBodyComponent urlPath={urlPathMovies} />
    </div>
  );
};
export default MoviesComponent;
