import MovieBodyComponent from "./body";

const TrendingComponet = () => {
  const urlPathTrending = "trending/all/day";
  const type = "trending";
  const topText = "HOT TRENDS";
  return (
    <div>
      <MovieBodyComponent
        urlPath={urlPathTrending}
        type={type}
        topText={topText}
      />
    </div>
  );
};

export default TrendingComponet;
