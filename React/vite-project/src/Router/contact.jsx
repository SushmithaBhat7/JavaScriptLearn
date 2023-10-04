import { useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    console.log("Mounting Success: Contact");

    const mouseListener = (e) => {
      console.log(e.pageX, e.pageY); //just a placeholder code
    };

    document.addEventListener("mousemove", mouseListener);

    return () => {
      console.log("Unmounting Contact");
      document.removeEventListener("mousemove", mouseListener);
    };
  }, []);

  return (
    <div>
      <h1>Welcome to Contact page</h1>
      <div>
        <Link to="/about">About</Link>
        <br />
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Contact;
