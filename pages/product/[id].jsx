import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Products.module.css";
import pizza from "./pizza.json";
const Products = () => {
  const [size, setSize] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={pizza.img}
            alt={pizza.name}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose your size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={(_) => setSize(0)}>
            <span className={styles.number}>Small</span>
            <Image src="/images/size.png" alt="small" layout="fill" />
          </div>
          <div className={styles.size} onClick={(_) => setSize(1)}>
            <span className={styles.number}>Mediums</span>
            <Image src="/images/size.png" alt="small" layout="fill" />
          </div>
          <div className={styles.size} onClick={(_) => setSize(2)}>
            <span className={styles.number}>Large</span>
            <Image src="/images/size.png" alt="small" layout="fill" />
          </div>
        </div>
        <h3 className={styles.choose}>choose additional ingredient</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="cheese"
              name="cheese"
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="spicy"
              name="spicy"
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="garlic"
              name="garlic"
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
