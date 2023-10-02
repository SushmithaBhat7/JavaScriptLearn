import Pagination from "@mui/material/Pagination";
const PaginationComponent = ({ setPage }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div className="paginationContainer">
      <Pagination
        count={50}
        color="primary"
        size="large"
        onChange={(e) => handlePageChange(e.target.textContent)}
      />
    </div>
  );
};
export default PaginationComponent;
