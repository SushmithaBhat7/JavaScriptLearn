import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  console.log("Params : ", params);

  useEffect(() => {
    console.log("Product Details Mounted");
  }, []);

  return (
    <div>
      <h1>My Product Details: {params.productId}</h1>
    </div>
  );
};

export default ProductDetails;
