import MovieBodyComponent from "./body";
import FooterComponent from "./footer";
import HeaderComponent from "./header";
const MovieAppComponent = () => {
  return (
    <div className="appContainer">
      <HeaderComponent />
      <MovieBodyComponent />
      <FooterComponent />
    </div>
  );
};
export default MovieAppComponent;
