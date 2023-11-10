import { useSelector } from "react-redux";

const MyCart = () => {
  const cartList = useSelector((state) => state.myCart.data);
  return (
    <div>
      <h1>Cart List</h1>
      {cartList.map((item) => {
        return (
          <div
            style={{
              display: "flex",
              gap: "4px",
              border: "1px solid silver",
              padding: "4px",
              borderRadius: "6px",
              alignItems: "center",
              marginBottom: 6,
            }}
            key={item.id}
          >
            <img width={20} src={item.image} />
            <span>{item.title}</span>
            <span>Quantity{item.quantity}</span>
          </div>
        );
      })}
    </div>
  );
};
export default MyCart;
