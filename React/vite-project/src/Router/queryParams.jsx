import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const defaultData = ["Morena 1", "Morena 2", "Morena 1", "Morena 3"];

const Search = () => {
  const [orders, setOrders] = useState({
    chennai: ["Chennai 1", "Chennai 2", "Chennai 3", "Chennai 4"],
    indore: ["Indore 1", "Indore 1", "Indore 1", "Indore 1"],
    shampoo: ["Head & Shoulder", "Sunsilk", "Dove"],
  });
  const [searchQuery] = useSearchParams();
  console.log("Q", searchQuery.get("q"));
  console.log("Artist", searchQuery.get("artist"));
  console.log("Order", searchQuery.get("order"));

  const order = searchQuery.get("order");

  return (
    <div>
      <h1>
        Searching for{" "}
        {order ? `Showing results for order:${order}` : "No order selected"}
      </h1>
      {orders[order]
        ? orders[order].map((item, index) => <p key={index}>{item}</p>)
        : defaultData.map((item, index) => <p key={index}>{item}</p>)}
    </div>
  );
};

export default Search;
