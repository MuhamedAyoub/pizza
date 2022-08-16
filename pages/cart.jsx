import Left from "../components/Carts/Left";
import Right from "../components/Carts/Right";
import styles from "../styles/Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../redux/cartSlice"
import axios from 'axios';
import { useRouter } from "next/router";
const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const createOrder = async (data) => {
    try {

      const res = await axios.post("http://localhost:3000/api/orders", data)
      res.status === 201 && router.push("/orders/" + res.data._id);
      // after pay clean the basket 
      dispatch(reset())
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className={styles.container}>
      <Left cart={cart} />
      <Right cart={cart} createOrder={createOrder} />
    </div>
  );
};

export default Cart;
