import Head from "next/head";
import Featured from "../components/Features";
import PizzaList from "../components/Pizzalist";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  );
}
