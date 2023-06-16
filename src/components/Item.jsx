import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../feature/cart/cartSlice";
import { Button, ButtonGroup, Card, Col } from "react-bootstrap";

export default function Item({ item }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  function addItem() {
    return dispatch(addToCart(item));
  }

  function removeItem() {
    return dispatch(removeFromCart(item));
  }

  function decreaseQuantity() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      return removeItem();
    }
  }

  function increaseQuantity() {
    setQuantity(quantity + 1);
    return addItem();
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
          Price: RM{item.price}{" "}
          <Col className="mt-3 mb-3 d-flex justify-content-between align-items-center">
            <ButtonGroup size="sm">
              <Button variant="outline-secondary" onClick={decreaseQuantity}>
                -
              </Button>
              <input
                type="text"
                value={quantity}
                size={2}
                className="text-center"
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <Button variant="outline-secondary" onClick={increaseQuantity}>
                +
              </Button>
            </ButtonGroup>{" "}
            {quantity > 0 && (
              <span className="text-danger">RM{item.price * quantity}</span>
            )}
          </Col>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
