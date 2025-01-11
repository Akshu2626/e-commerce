import React from "react";
import Link from "next/link";
import { urlFor } from "../../lib/client";
import styles from "./Allproducts.module.css";

const Allproducts = ({ allproducts }) => {
  const { category, description, id, image, price, title } = allproducts || {};
  console.log(allproducts);

  return (
    <div className={styles.productCard}>
      <Link href={`/product/${id}`}>
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
