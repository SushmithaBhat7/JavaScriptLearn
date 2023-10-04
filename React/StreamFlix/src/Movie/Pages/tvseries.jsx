import MovieBodyComponent from "./body";

const TvSeriesComponent = () => {
  const urlPathTvSeries = "discover/tv";
  const type = "tv";
  return (
    <div className="movieComponetContainer">
      <MovieBodyComponent urlPath={urlPathTvSeries} type={type} />
    </div>
  );
};
export default TvSeriesComponent;
