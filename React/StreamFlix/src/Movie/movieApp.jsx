// import MovieBodyComponent from "./Pages/body";
import FooterComponent from "./footer";
import HeaderComponent from "./header";
import { Outlet } from "react-router-dom";
const MovieAppComponent = () => {
  return (
    <div className="appContainer">
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
      {/* <MovieBodyComponent /> */}
    </div>
  );
};
export default MovieAppComponent;
