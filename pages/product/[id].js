import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { CgShoppingCart } from 'react-icons/cg';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product }) => {
    const { image, title, description, price, category } = product;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd } = useStateContext();

    return (
        <div className="products">
            <div className="product-detail-container">
                <div className="product-images">
                    <div className="small-images-container">

                        <img
                            src={image}
                            className="small-image"
                            alt={title}
                            onMouseEnter={() => setIndex(0)}
                        />
                    </div>
                    <div className="big-image-container">
                        <img src={image} alt={title} />
                    </div>
                </div>
                <div className="product-details">
                    <div className="name-and-category">
                        <h3>{title}</h3>
                        <span>{category}</span>
                    </div>
                    <div className="quantity-desc">
                        <h4>Quantity: </h4>
                        <div>
                            <span className="minus" onClick={decQty}>
                                <AiOutlineMinus />
                            </span>
                            <span className="num">{qty}</span>
                            <span className="plus" onClick={incQty}>
                                <AiOutlinePlus />
                            </span>
                        </div>
                    </div>
                    <div className="add-to-cart">
                        <button
                            className="btn"
                            type="button"
                            onClick={() => onAdd(product, qty)}
                        >
                            <CgShoppingCart size={20} />
                            Add to Cart
                        </button>
                        <p className="price">${price.toFixed(2)}</p>
                    </div>
                </div>
            </div>

            <div className="product-desc-container">
                <div className="desc-title">
                    <div className="desc-background">Overview</div>
                    <h2>Product Information</h2>
                </div>
                <div className="desc-details">
                    <h4>PRODUCT DETAILS</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

export const getStaticProps = async ({ params }) => {
    const { id } = params;
    console.log(id);


    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await response.json();
        return {
            props: { product },
        };
    } catch (error) {
        console.error('Error fetching product details:', error);
        return {
            notFound: true,
        };
    }
};

export const getStaticPaths = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();

        const paths = products.map((product) => ({
            params: {
                id: product.id.toString(),
            },
        }));

        return {
            paths,
            fallback: 'blocking',
        };
    } catch (error) {
        console.error('Error fetching products:', error);
        return {
            paths: [],
            fallback: 'blocking',
        };
    }
};
