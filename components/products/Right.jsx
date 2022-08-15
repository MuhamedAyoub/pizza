import Image from "next/image";
import Box from "./Box";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
export default function Right({ styles, pizza }) {
  //* useState
  const taille = ["Small", "Medium", "Large"];
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(pizza.prices[0]);
  const [quantity, setQuantity] = useState(1);
  const [extra, setExtra] = useState([]);

  // * End use State
  //? Start Declare Const
  const dispatch = useDispatch();
  //? End Declare Const

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
    if (checked) {
      changePrice(option.price);
      setExtra((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtra(extra.filter((item) => item._id !== option._id));
    }
  };
  //* Store Functions
  const handClick = () => {
    dispatch(addProduct({ quantity, extra, price, ...pizza }));
  };
  //*End  Store Functions

  console.log(quantity);
  return (
    <div className={styles.right}>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${price * quantity}</span>
      <p className={styles.desc}>{pizza.desc}</p>
      <h3 className={styles.choose}>Choose your size</h3>
      <div className={styles.sizes}>
        {taille.map((item, index) => (
          <div
            key={index}
            className={styles.size}
            onClick={(_) => handleChangeSize(index)}
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
        <input
          onChange={(e) => setQuantity(e.target.value)}
          type="number"
          defaultValue={1}
          className={styles.quantity}
          min="0"
        />
        <button onClick={handClick} className={styles.button}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
