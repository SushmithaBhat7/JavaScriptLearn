import { useEffect, useState } from "react";

const Products = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((item) => item.json())
      .then((item) => setProductList(item));
  }, []);

  const handleOnClickAddToCart = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      {productList.map((item) => {
        return (
          <div key={item.id}>
            <img className="imageItem" src={item.image} />
            <div>
              <span>{item.title}</span>
              <button onClick={handleOnClickAddToCart}>Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
