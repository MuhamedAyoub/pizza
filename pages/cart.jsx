import Left from "../components/Carts/Left";
import Right from "../components/Carts/Right";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.container}>
      <Left />
      <Right />
    </div>
  );
};

export default Cart;
