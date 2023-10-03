import { Link } from "react-router-dom";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";

const FooterComponent = () => {
  return (
    <div>
      <nav>
        <ul className="footerContainer">
          <li>
            <Link to="/" className="trendingDiv footerInnerDiv">
              <WhatshotIcon />
              Trending
            </Link>
          </li>
          <li>
            <Link to="/movies" className="moviesDiv footerInnerDiv">
              <MovieCreationIcon />
              Movies
            </Link>
          </li>
          <li>
            <Link to="/tvseries" className="TVSeriesDiv footerInnerDiv">
              <TvIcon />
              TV series
            </Link>
          </li>
          <li>
            <Link to="/search" className="Search footerInnerDiv">
              <SearchIcon />
              Search
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default FooterComponent;
