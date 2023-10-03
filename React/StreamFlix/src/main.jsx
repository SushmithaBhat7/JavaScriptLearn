import ReactDOM from "react-dom/client";
import MovieAppComponent from "./Movie/movieApp";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchComponent from "./Movie/Pages/search";
import MoviesComponent from "./Movie/Pages/movies";
import TvSeriesComponent from "./Movie/Pages/tvseries";
import HeaderComponent from "./Movie/header";
import FooterComponent from "./Movie/footer";
//rafce
const WrapperContainer = ({ children }) => {
  return (
    <div className="appContainer">
      <HeaderComponent />
      {children}
      <FooterComponent />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <WrapperContainer>
        <MovieAppComponent />
      </WrapperContainer>
    ),
  },
  {
    path: "/search",
    element: (
      <WrapperContainer>
        <SearchComponent />
      </WrapperContainer>
    ),
  },
  {
    path: "/movies",
    element: (
      <WrapperContainer>
        <MoviesComponent />
      </WrapperContainer>
    ),
  },
  {
    path: "/tvseries",
    element: (
      <WrapperContainer>
        <TvSeriesComponent />
      </WrapperContainer>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
