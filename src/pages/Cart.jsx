import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  let subtotal = 0;
  cart.forEach((item) => {
    subtotal += parseInt(item.price.substring(2)) * item.amount;
  });

  return (
    <Container>
      <h2>Your Cart:</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <h4>Subtotal: RM{subtotal}</h4>
    </Container>
  );
}
