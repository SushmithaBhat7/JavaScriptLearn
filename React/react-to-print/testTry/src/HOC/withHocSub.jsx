const WithHocWrapper = ({ isLoading, products, children }) => {
  if (isLoading) {
    return <p>Loading ..!!</p>;
  }

  if (products.length === 0) {
    return <p>No Products</p>;
  }

  return children;
};

export default WithHocWrapper;
