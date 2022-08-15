import styles from "../../styles/Cart.module.css";
import Image from "next/image";
const Table = ({ cart }) => {
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
        {cart.products?.map((product) => (
          <tr key={product._id} className={styles.tr}>
            <td className={styles.img}>
              <div className={styles.imgContainer}>
                <Image
                  src={product.img}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>{product.title}</span>
            </td>
            <td>
              <span className={styles.extras}>
                {product.extra?.map((extr) => (
                  <span key={extr._id}>
                    {extr.text}
                    <br />
                  </span>
                ))}
              </span>
            </td>
            <td>
              <span className={styles.price}>${product.price}</span>
            </td>
            <td>
              <span className={styles.quantity}>{product.quantity}</span>
            </td>
            <td>
              <span className={styles.total}>
                ${product.price * product.quantity}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

{
  /* <tr className={styles.tr}>
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
        </tr> */
}
