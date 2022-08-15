import styles from "../../styles/Order.module.css";
import Left from "../../components/orders/Left";
import Right from "../../components/orders/Right";

const Order = () => {
  return (
    <div className={styles.container}>
      <Left />
      <Right />
    </div>
  );
};

export default Order;
