import MovieBodyComponent from "./body";

const TrendingComponet = () => {
  const urlPathTrending = "trending/all/day";
  const type = "trending";
  return (
    <div>
      <MovieBodyComponent urlPath={urlPathTrending} type={type} />
    </div>
  );
};

export default TrendingComponet;
