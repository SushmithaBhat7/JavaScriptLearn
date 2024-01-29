import PageC from "./PageC";

const PageB = ({ theme, toggleTheme }) => {
  console.log("PageB theme :", theme);
  return (
    // <>
    //   <PageC />
    // </>
    <>
      <PageC theme={theme} toggleTheme={toggleTheme} />
    </>
  );
};
export default PageB;
