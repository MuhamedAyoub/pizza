import axios from "axios";
import { useState } from "react";
import styles from "../styles/Add.module.css";

const Add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [prices, setPrices] = useState([]);
  const [extra, setExtra] = useState(null);
  const [extraOption, setExtraOption] = useState([]);
  //! functions
  const handleExtraInput = (e) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };
  const handleExtraOps = () => {
    if (extra) {
      setExtraOption((prev) => [...prev, extra]);
    }
  };
  const changePrice = (value, index) => {
    const newPrices = prices;
    newPrices[index] = value;
    setPrices(newPrices);
  };
  const handleAdd = async () => {
    //? using cloudinary
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uplaodRes = await axios.post(
        "https://api.cloudinary.com/v1_1/esi-sba/image/upload",
        data
      );
      const { url } = (await uplaodRes).data;
      const newPizza = {
        title,
        desc,
        img: url,
        prices,
        extraOption,
      };
      setClose(true);
      await axios.post("http://localhost:3000/api/products", newPizza);
    } catch (ex) {
      console.log(ex);
    }
  };
  // ! End functions;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.close}>
          <span onClick={(_) => setClose(true)}>X</span>
        </div>
        <h1>Add a new Pizza</h1>
        <div className={styles.item}>
          <label className={styles.label}>Import image</label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            required
            className={styles.input}
            type="text"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Desc</label>
          <textarea
            required
            className={styles.input}
            placeholder="Description"
            name="desc"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="price">
            Prices
          </label>
          <div className={styles.priceContainer}>
            <input
              required
              type="number"
              min={1}
              placeholder="Small"
              className={`${styles.price} ${styles.input} ${styles.inputSm} `}
              onChange={(e) => changePrice(e.target.value, 0)}
              id="price"
            />
            <input
              required
              min={1}
              type="number"
              placeholder="Mediums"
              className={`${styles.price} ${styles.input} ${styles.inputSm} `}
              onChange={(e) => changePrice(e.target.value, 1)}
            />
            <input
              required
              min={1}
              type="number"
              placeholder="Large"
              className={`${styles.price} ${styles.input} ${styles.inputSm}`}
              onChange={(e) => changePrice(e.target.value, 2)}
            />
          </div>
        </div>
        <div className={styles.item}>
          <label htmlFor="price">Extra</label>
          <div className={styles.extra}>
            <input
              required
              type="text"
              placeholder="Sauce"
              className={styles.input}
              onChange={handleExtraInput}
              name="text"
            />
            <input
              required
              min={1}
              type="number"
              name="price"
              placeholder="Price"
              className={`${styles.price} ${styles.input}`}
              onChange={handleExtraInput}
            />
          </div>
          <button className={styles.extraButton} onClick={handleExtraOps}>
            Add
          </button>
        </div>
        <div className={styles.extraItems}>
          {extraOption.map((option) => {
            console.log(option);
            return (
              option && (
                <span key={option?.price} className={styles.extraItem}>
                  {option.text}
                </span>
              )
            );
          })}
        </div>
        {file && title && desc && prices[0] && prices[1] && prices[2] && (
          <button onClick={(_) => handleAdd()} className={styles.addButton}>
            Create
          </button>
        )}
      </div>
    </div>
  );
};

export default Add;
