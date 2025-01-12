import React from 'react';
import AllProducts from "../components/AllProducts/AllProducts"


const Products = ({ products }) => {
  console.log(products);
  
  return (
    <div className="Allproducts-container">
      {products?.map((prod) => (
        <AllProducts key={prod.id} allproducts={prod} />
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    
    if (!res.ok) {
      throw new Error(`Failed to fetch products. Status: ${res.status}`);
    }

    const products = await res.json();

    return {
      props: { products },
    };
  } catch (error) {
    console.error('Error fetching products:', error);

    return {
      props: { products: [] },
    };
  }
};


export default Products;
