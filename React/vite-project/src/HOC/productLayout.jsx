import { useEffect, useState } from "react";
import axios from "axios";
import LoadingWrapper from "./LoadingWrapper";

const Products2WithHOC = () => {
  const [productList, setProductList] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const products = await axios.get("https://fakestoreapi.com/products");
        setProductList(products.data);
        setIsLoadingProducts(false);
      } catch (err) {
        console.log("Err: ", err);
        setIsLoadingProducts(false);
        setProductList([]);
      }
    })();
  }, []);

  return (
    <LoadingWrapper
      isLoading={isLoadingProducts}
      message={"No Products Available."}
      data={productList}
    >
      <h1>My Products</h1>
      <ul>
        {productList.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    </LoadingWrapper>
  );
};

export default Products2WithHOC;
