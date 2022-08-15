import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/images/featured.png",
    "/images/featured2.png",
    "/images/featured3.png",
  ];

  function handleArrow(direction) {
    if (direction === "l") {
      setIndex(index === 0 ? 2 : index - 1);
    } else if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    } else return;
  }

  console.log(index);
  return (
    <div className={styles.container}>
      <button
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/images/arrowl.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </button>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <button
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/images/arrowr.png"
          layout="fill"
          alt=""
          objectFit="contain"
        />
      </button>
    </div>
  );
};

export default Featured;
