import React from 'react';
import { HeroBanner, Newsletter, Product } from '../components';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

const Home = ({ products }) => {
  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <>
      <HeroBanner />
      <div className="products-outer-container">
        <div className="subtitle">
          <span>PRODUCTS</span>
          <h2>Check What We Have</h2>
        </div>
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1260: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Navigation, A11y]}
          navigation
        >
          {products.map((product, id) => (
            <SwiperSlide key={id}>
              <Product product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Newsletter />
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

    return {
      props: { products },
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: { products: [] }, // Return an empty array if the fetch fails
    };
  }
};

export default Home;
