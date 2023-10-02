import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
const FooterComponent = () => {
  return (
    <div className="footerContainer">
      <div className="trendingDiv footerInnerDiv">
        <WhatshotIcon />
        Trending
      </div>
      <div className="moviesDiv footerInnerDiv">
        <MovieCreationIcon />
        Movies
      </div>
      <div className="TVSeriesDiv footerInnerDiv">
        <TvIcon />
        TV series
      </div>
      <div className="Search footerInnerDiv">
        <SearchIcon />
        Search
      </div>
    </div>
  );
};
export default FooterComponent;
