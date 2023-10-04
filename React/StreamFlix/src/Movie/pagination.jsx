import Pagination from "@mui/material/Pagination";
const PaginationComponent = ({ setPage, totalPage }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div className="paginationContainer">
      <Pagination
        count={totalPage}
        color="primary"
        size="large"
        onChange={(e) => handlePageChange(e.target.textContent)}
      />
    </div>
  );
};
export default PaginationComponent;
