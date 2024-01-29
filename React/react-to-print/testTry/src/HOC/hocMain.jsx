import { useEffect, useState } from "react";

const HocComponent = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((result) => result.json())
      .then((data) => {
        setIsLoading(false);
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  if (isLoading) {
    return <p>Loading ...!</p>;
  }
  if (products.length === 0) {
    return <p>No products</p>;
  }
  return (
    <div>
      {products.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item.title}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default HocComponent;
