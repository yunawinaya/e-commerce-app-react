import { useDispatch } from "react-redux";
import { addToCart } from "../feature/cart/cartSlice";
import { Button, Card } from "react-bootstrap";

export default function Item({ item }) {
  const dispatch = useDispatch();

  function addItem() {
    return dispatch(addToCart(item));
  }
  return (
    <Card>
      <Card.Img
        variant="top"
        src={`https://picsum.photos/id/${item.id}/200`}
        alt={item.title}
      />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
          <br />
          Price: {item.price}
        </Card.Text>
        <Button variant="primary" onClick={addItem}>
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}
