import { CardImage, CardLink, CardTitle } from "./4.product-card-style";

const ProductCard = ({ item }) => {
  return (
    <CardLink
      key={item.id}
      className="sonia"
      to={`/product-details/${item.id}`}
    >
      <CardImage src={item.image} alt={item.title} />
      <CardTitle>{item.title}</CardTitle>
    </CardLink>
  );
};

export default ProductCard;
