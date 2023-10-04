import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    console.log("Mounting Success: Home");

    return () => {
      console.log("Unmounting Home");
    };
  }, []);

  return (
    <div>
      <h1>Welcome to Home page</h1>
      <div>
        <Link to="/contact">Contact</Link>
        <br />
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Home;
