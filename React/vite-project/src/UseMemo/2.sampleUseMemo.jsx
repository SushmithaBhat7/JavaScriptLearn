import { useMemo, useState } from "react";

const MyCart = () => {
  const [cartList, setCartList] = useState([
    { id: 1, title: "Apple iPhone 15 Pro Max", price: 142000, quantity: 2 },
    { id: 2, title: "Apple iPad Pro 11 inch", price: 88000, quantity: 1 },
    { id: 3, title: "Parle G (Gold)", price: 10, quantity: 10 },
  ]);

  const productFinalCartDetails = useMemo(() => {
    const finalDetails = {};

    const finalPrice = cartList.reduce((acc, item) => {
      const { price } = item;
      acc += price;
      return acc;
    }, 0);

    finalDetails.totalPrice = finalPrice;
  }, [cartList]);
};
