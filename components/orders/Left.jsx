import styles from "../../styles/Order.module.css";
import Image from "next/image";
export default function Left({ order }) {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.left}>
      <div className={styles.row}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Address</th>
            <th>Total</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <span className={styles.id}>{order._id}</span>
            </td>
            <td>
              <span className={styles.name}>{order.customer}</span>
            </td>
            <td>
              <span className={styles.address}>{order.address}</span>
            </td>
            <td>
              <span className={styles.total}>${order.total}</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.row}>
        <div className={statusClass(0)}>
          <Image src="/images/paid.png" width={30} height={30} alt="" />
          <span>Payment</span>
          <div className={styles.checkedIcon}>
            <Image
              className={styles.checkedIcon}
              src="/images/checked.png"
              width={20}
              height={20}
              alt=""
            />
          </div>
        </div>
        <div className={statusClass(1)}>
          <Image src="/images/bake.png" width={30} height={30} alt="" />
          <span>Preparing</span>
          <div className={styles.checkedIcon}>
            <Image
              className={styles.checkedIcon}
              src="/images/checked.png"
              width={20}
              height={20}
              alt=""
            />
          </div>
        </div>
        <div className={statusClass(2)}>
          <Image src="/images/bike.png" width={30} height={30} alt="" />
          <span>On the way</span>
          <div className={styles.checkedIcon}>
            <Image
              className={styles.checkedIcon}
              src="/images/checked.png"
              width={20}
              height={20}
              alt=""
            />
          </div>
        </div>
        <div className={statusClass(3)}>
          <Image src="/images/delivered.png" width={30} height={30} alt="" />
          <span>Delivered</span>
          <div className={styles.checkedIcon}>
            <Image
              className={styles.checkedIcon}
              src="/images/checked.png"
              width={20}
              height={20}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
