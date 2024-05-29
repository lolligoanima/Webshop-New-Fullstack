import { Column } from "./Column";
import { Row } from "./Row";
import { Image } from "./Image";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { updateItemInCart } from "../../utils/cartManagement";


export const ProductCard = ({ product }) => {
  const [cartItems, setCartItems] = useContext(CartContext);
  const { id, title, alt, imageSource, price, availability } = product;

  return (
    <Column
      style={{
        width: "200px",
        height: "350px",
        margin: "8px",
        padding: "8px",
        border: "2px solid lightgray",
        borderRadius: "8px",
      }}
    >
      <Image src={imageSource} alt={alt} title={title} />
      <h3>{title}</h3>
      <Row>
        <h4>${price}</h4>
        {!availability && (
          <p style={{ color: "red", fontStyle: "italic" }}>Ausverkauft</p>
        )}
      </Row>
      <button
        onClick={() => setCartItems((pre) => updateItemInCart("add" , product, pre))}
        disabled={!availability}
      >
        In den Warenkorb 🛒
      </button>
    </Column>
  );
};
