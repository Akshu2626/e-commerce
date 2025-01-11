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

// Fetching data from Fake Store API on the server side
export const getServerSideProps = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    
    // Check if the response is okay (status 200-299)
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
      props: { products: [] }, // Return an empty array as fallback
    };
  }
};


export default Products;
