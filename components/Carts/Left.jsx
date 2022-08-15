import styles from "../../styles/Cart.module.css";
import Table from "./Table";
export default function Left({ cart }) {
  return (
    <div className={styles.left}>
      <Table cart={cart} />
    </div>
  );
}
