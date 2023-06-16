import { Col, Container, Row } from "react-bootstrap";
import Item from "../components/Item";

const items = [
  { id: 1, name: "Pen", description: "It's a pen", price: "10" },
  {
    id: 2,
    name: "Laptop",
    description: "I think it's a laptop",
    price: "1200",
  },
  { id: 3, name: "IPhone 2", description: "Might be IPhone 3", price: "30" },
  { id: 4, name: "Notebook", description: "It's a notebook", price: "10" },
];

export default function Home() {
  return (
    <Container>
      <Row>
        {items.map((item) => (
          <Col key={item.id} md={3}>
            <Item item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
