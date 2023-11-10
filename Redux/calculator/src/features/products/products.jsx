import { useEffect, useState } from "react";
import "./product.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";
const Products = () => {
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((item) => item.json())
      .then((item) => setProductList(item));
  }, []);

  const handleOnClickAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="mainContainerDiv">
      {productList.map((item) => {
        return (
          <div className="productsDiv" key={item.id}>
            <img className="imageItem" src={item.image} />
            <div className="lowerDivProducts">
              <span>{item.title}</span>
              <button
                className="addCartButton"
                onClick={() => handleOnClickAddToCart(item)}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
