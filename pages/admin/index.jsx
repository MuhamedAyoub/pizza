import styles from "../../styles/Admin.module.css";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function Dashboard({ products, orders }) {
  const [pizzaList, setPizzaList] = useState(products);
  const [orderList, setOrderList] = useState(orders);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete("http://localhost:3000/api/products" + id);
      setPizzaList(piizaList.filter((item) => item._id !== id));
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Dashboard</h1>
        <table className={styles.table}>
          {pizzaList.map((product) => (
            <tbody key={product._id}>
              <tr className={styles.trTitle}>
                <td>
                  <Image
                    src={product.img}
                    alt="pizza"
                    objectFit="cover"
                    width={50}
                    height={50}
                  />
                </td>
                <td>{product._id.slice(0, 5)}...</td>
                <td>{product.title}</td>
                <td>${product.prices[0]}</td>
                <td>
                  <button className={styles.button}>Edit</button>
                  <button onClick={handleDelete} className={styles.button}>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <td>Customer</td>
              <td>Total</td>
              <td>Payment Method</td>
              <td>Action</td>
            </tr>
          </tbody>
        </table>
      </div>
      <tbody>
        <tr className={styles.trTitle}>
          <th>{"+213561475310".slice(5)}...</th>
          <td>Jon Doe</td>
          <td>$50</td>
          <td>paid</td>
          <td>Preparing</td>
          <td>
            <button>Next Stage</button>
          </td>
        </tr>
      </tbody>
    </div>
  );
}

export const getServerSideProps = async () => {
  const productRes = await axios.get("http://localhost:3000/api/products");
  const ordersRes = await axios.get("http://localhost:3000/api/orders");
  return {
    props: {
      orderes: ordersRes.data,
      products: productRes.data,
    },
  };
};
