import Image from "next/image";
import Box from "./Box";
import { useState } from "react";
export default function Right({ styles, pizza }) {
  const taille = ["Small", "Medium", "Large"];
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(pizza.prices[0]);
  const changePrice = (number) => {
    setPrice(price + number);
  };
  const handleChangeSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };
  const handleChange = (e, option) => {
    const { checked } = e.target;
    changePrice(checked ? option : -option);
  };

  return (
    <div className={styles.right}>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${price}</span>
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
        {pizza.extraOption.map((option, index) => (
          <Box
            key={index}
            styles={styles}
            option={option}
            onChange={handleChange}
          />
        ))}
      </div>
      <div className={styles.add}>
        <input type="number" defaultValue={1} className={styles.quantity} />
        <button className={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
}
