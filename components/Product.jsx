import React from "react";
import Link from "next/link";

const Product = ({ product }) => {
  const { id, title, price, image } = product;

  return (
    <div>
      <Link href={{ pathname: "/product", query: { id: product.id } }}>
        <div className="product-card">
          <img src={image} width={380} height={400} className="product-image" />
          <p className="product-name">{title} </p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
