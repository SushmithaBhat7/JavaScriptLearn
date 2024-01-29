import { useContext } from "react";
import { userProfileContext } from "./context";

const PageC = ({ theme, toggleTheme }) => {
  //   const themePage = useContext(userProfileContext);
  //   console.log({ themePage });
  //   console.log("themePage.theme", themePage.theme);
  console.log("PageC theme :", theme);

  return (
    // <div style={{ background: themePage.theme }}>
    //   <p> {themePage.theme}</p>
    //   <button onClick={themePage.toggleTheme}>Change Theme</button>
    // </div>
    <div style={{ backgroundColor: theme }}>
      <p> {theme}</p>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};
export default PageC;
