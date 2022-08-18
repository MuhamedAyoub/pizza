import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Featured from "../components/Features";
import PizzaList from "../components/Pizzalist";
import styles from "../styles/Home.module.css";

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState();

  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Featured pizzaList={pizzaList} />
      {admin && <button>Add Piza</button>}
      <PizzaList pizzaList={pizzaList} />
      {}
    </div>
  );
}

export async function getServerSideProps(context) {
  const cookie = context.req?.cookies;
  const admin = cookie.token === process.env.TOKEN ? true : false;
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
}
