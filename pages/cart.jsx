import Left from "../components/Carts/Left";
import Right from "../components/Carts/Right";
import styles from "../styles/Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <div className={styles.container}>
      <Left cart={cart} />
      <Right cart={cart} />
    </div>
  );
};

export default Cart;
