import React from "react";
import Link from "next/link";
import styles from "./Allproducts.module.css";

const Allproducts = ({ allproducts }) => {
  const { id, image, price, title } = allproducts || {};

  return (
    <div className={styles.productCard} key={id}>
      <Link href={{ pathname: "/product", params: { id: id } }}>
        <div>
          <img
            src={image}
            alt={title}
            width={250}
            height={270}
            className={styles.productImage}
          />
          <p className={styles.productName}>{title} </p>
          <p className={styles.productPrice}>${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Allproducts;
