import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Mounting Success: About");

    return () => {
      console.log("Unmounting: About");
    };
  }, []);

  return (
    <div>
      <h1 onClick={() => setCounter((val) => val + 1)}>
        I am About Component {counter}
      </h1>
      <div>
        <Link to="/contact">Contact</Link>
        <br />
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default About;
