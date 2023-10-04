import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <ul>
        {products.map((item) => {
          return (
            <Link key={item.id} to={`/product-details/${item.id}`}>
              <li>{item.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
