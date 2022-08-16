import styles from "../../styles/Order.module.css";
import Left from "../../components/orders/Left";
import Right from "../../components/orders/Right";
import axios from 'axios';

const Order = ({ order }) => {
  const status = order.status;
  return (
    <div className={styles.container}>
      <Left order={order} />
      <Right order={order} />
    </div>
  );
};

export default Order;

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: {
      order: res.data,
    }
  }
}