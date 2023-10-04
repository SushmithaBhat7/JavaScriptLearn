import MovieBodyComponent from "./body";

const TvSeriesComponent = () => {
  const urlPathTvSeries = "discover/tv";
  return (
    <div className="movieComponetContainer">
      <MovieBodyComponent urlPath={urlPathTvSeries} />
    </div>
  );
};
export default TvSeriesComponent;
