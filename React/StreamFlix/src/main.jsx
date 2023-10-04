import ReactDOM from "react-dom/client";
import MovieAppComponent from "./Movie/movieApp";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchComponent from "./Movie/Pages/search";
import MoviesComponent from "./Movie/Pages/movies";
import TvSeriesComponent from "./Movie/Pages/tvseries";
// import MovieBodyComponent from "./Movie/Pages/body";
import TrendingComponet from "./Movie/Pages/trending";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieAppComponent />,
    children: [
      {
        path: "/",
        element: <TrendingComponet />,
      },
      {
        path: "/search",
        element: <SearchComponent />,
      },
      {
        path: "/movies",
        element: <MoviesComponent />,
      },
      {
        path: "/tvseries",
        element: <TvSeriesComponent />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
