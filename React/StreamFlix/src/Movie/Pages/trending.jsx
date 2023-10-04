import MovieBodyComponent from "./body";

const TrendingComponet = () => {
  const urlPathTrending = "trending/all/day";
  return (
    <div>
      <MovieBodyComponent urlPath={urlPathTrending} />
    </div>
  );
};

export default TrendingComponet;
