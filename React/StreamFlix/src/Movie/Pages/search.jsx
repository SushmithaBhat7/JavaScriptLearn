import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import MovieBodyComponent from "./body";

const SearchComponent = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [type, setType] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleShowComponent = () => {
    setShowComponent(true);
  };

  const handleClickMovies = () => {
    setType(false);
  };
  const handleClickTVSeries = () => {
    setType(true);
  };
  const typesearch = type ? "tv" : "movie";
  const urlPathSearch = `search/${typesearch}`;
  const querySearch = `&query=${searchText}`;
  console.log(showComponent);
  return (
    <div className="searchComponentContainer">
      <div className="searchContainer">
        <input
          type="Search"
          placeholder="Search..."
          className="searchInput"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="searchIcon" onClick={handleShowComponent}>
          <SearchIcon />
        </div>
      </div>
      <div className="searchBotomContainer">
        <button className="searchMovies" onClick={handleClickMovies}>
          SEARCH MOVIES
        </button>
        <button className="searchtvSeries" onClick={handleClickTVSeries}>
          SEARCH TV SERIES
        </button>
      </div>
      {showComponent && (
        <MovieBodyComponent urlPath={urlPathSearch} query={querySearch} />
      )}
    </div>
  );
};
export default SearchComponent;
