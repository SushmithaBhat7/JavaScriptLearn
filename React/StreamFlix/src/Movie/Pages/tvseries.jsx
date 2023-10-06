import MovieBodyComponent from "./body";

const TvSeriesComponent = () => {
  const urlPathTvSeries = "discover/tv";
  const type = "tv";
  const topText = "EXPLORE TV SERIES";
  return (
    <div className="movieComponetContainer">
      <MovieBodyComponent
        urlPath={urlPathTvSeries}
        type={type}
        topText={topText}
      />
    </div>
  );
};
export default TvSeriesComponent;
