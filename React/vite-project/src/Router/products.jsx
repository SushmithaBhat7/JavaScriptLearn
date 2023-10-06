import { useEffect, useState } from "react";
import ProductCard from "./3.product-card";
import styled from "styled-components";

const ProductListContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await fetch("https://fakestoreapi.com/products");
    const parsedResult = await result.json();
    setProducts(parsedResult);
  };

  return (
    <div>
      <h1>My Products</h1>
      <ProductListContainer className="list-sonia">
        {products.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </ProductListContainer>
    </div>
  );
};

export default ProductList;
