import styles from "../../styles/Cart.module.css";
import Image from "next/image";
const Table = () => {
  const items = ["Product", "Name", "Extras", "Price", "Quantity", "Total"];
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {items.map((item, id) => (
            <th key={id}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className={styles.tr}>
          <td className={styles.img}>
            <div className={styles.imgContainer}>
              <Image
                src="/images/pizza.png"
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
          </td>
          <td>
            <span className={styles.name}>CORALZO</span>
          </td>
          <td>
            <span className={styles.extras}>
              Double ingredient, spicy sauce
            </span>
          </td>
          <td>
            <span className={styles.price}>$19.90</span>
          </td>
          <td>
            <span className={styles.quantity}>2</span>
          </td>
          <td>
            <span className={styles.total}>$39.80</span>
          </td>
        </tr>
        <tr className={styles.tr}>
          <td className={styles.img}>
            <div className={styles.imgContainer}>
              <Image
                src="/images/pizza.png"
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
          </td>
          <td>
            <span className={styles.name}>CORALZO</span>
          </td>
          <td>
            <span className={styles.extras}>
              Double ingredient, spicy sauce
            </span>
          </td>
          <td>
            <span className={styles.price}>$19.90</span>
          </td>
          <td>
            <span className={styles.quantity}>2</span>
          </td>
          <td>
            <span className={styles.total}>$39.80</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
