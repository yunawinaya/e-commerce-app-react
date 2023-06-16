import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../feature/cart/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  function removeItem() {
    dispatch(removeFromCart(item));
  }

  return (
    <Card className="mb-2">
      <Card.Body>
        <Row>
          <Col xs={4} md={2}>
            <Card.Img
              variant="top"
              src={`https://picsum.photos/seed/${item.id}/200`}
              alt={item.name}
            />
          </Col>
          <Col xs={8} md={6}>
            <Card.Title>
              {item.amount} x {item.name}
            </Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Button variant="danger" onClick={removeItem}>
              Remove
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
