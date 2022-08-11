import Image from "next/image";
import Right from "../../components/products/Right";
import styles from "../../styles/Products.module.css";
import axios from "axios";
const Products = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={pizza.img}
            alt={pizza.title}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <Right styles={styles} pizza={pizza} />
    </div>
  );
};

export default Products;
export async function getServerSideProps({ params }) {
  const res = await axios.get(
    `http://localhost:3001/api/products/${params.id}`
  );
  return {
    props: {
      pizza: res.data,
    },
  };
}
