import React from 'react';
import { HeroBanner, Newsletter, Product } from '../components';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Home = ({ products }) => {
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
            // width >= 300
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // width >= 1000
            1000: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // width >= 1260
            1260: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Navigation, A11y]}
          navigation
        >
          <div className="products-container">
            {products?.map((product) => (
              <SwiperSlide key={product._id}>
                <Product product={product} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>

      <Newsletter />
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

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

export default Home;
