import Image from "next/image";
import Box from "./Box";
import { useState } from "react";
export default function Right({ styles, pizza }) {
  const taille = ["Small", "Medium", "Large"];
  const [size, setSize] = useState(0);

  return (
    <div className={styles.right}>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.prices[size]}</span>
      <p className={styles.desc}>{pizza.desc}</p>
      <h3 className={styles.choose}>Choose your size</h3>
      <div className={styles.sizes}>
        {taille.map((item, index) => (
          <div
            key={index}
            className={styles.size}
            onClick={(_) => setSize(index)}
          >
            <span className={styles.number}>{item}</span>
            <Image src="/images/size.png" alt={item} layout="fill" />
          </div>
        ))}
      </div>
      <h3 className={styles.choose}>choose additional ingredient</h3>
      <div className={styles.ingredients}>
        <Box id="double" styles={styles} name="Double Ingredients" />
        <Box id="cheese" styles={styles} name="Extra Cheese" />
        <Box id="spicy" styles={styles} name="Spicy Sauce" />
        <Box id="garlic" styles={styles} name="Garlic Sauce" />
      </div>
      <div className={styles.add}>
        <input type="number" defaultValue={1} className={styles.quantity} />
        <button className={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
}
