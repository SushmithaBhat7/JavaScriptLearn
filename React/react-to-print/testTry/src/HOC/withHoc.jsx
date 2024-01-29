import { useEffect, useState } from "react";
import WithHocWrapper from "./withHocSub";

const WithHocComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((result) => result.json())
      .then((data) => {
        setIsLoading(false);
        setProducts(data);
      });
  }, []);
  //   if (isLoading) {
  //     return <p>Loading ..!!!</p>;
  //   }
  //   if (products.length === 0) {
  //     return <p>No products</p>;
  //   }
  return (
    <WithHocWrapper isLoading={isLoading} products={products}>
      {products.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item.title}</li>
          </ul>
        );
      })}
    </WithHocWrapper>
  );
};

export default WithHocComponent;
