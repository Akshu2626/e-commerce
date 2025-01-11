import React, { useRef } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi';
import toast from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';
import getStripe from '../lib/getStripe';

const Cart = () => {
  const cartRef = useRef();
  const { cartItems, totalPrice, totalQty, onRemove, toggleCartItemQuantity } = useStateContext();

  // Handles Stripe Checkout
  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) {
      toast.error('Checkout failed. Please try again later.');
      return;
    }

    const data = await response.json();
    toast.loading('Redirecting...');
    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <h2>Shopping Cart</h2>
      <div className="cart-container">
        {/* Empty Cart Message */}
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h1>Your shopping cart is empty</h1>
          </div>
        )}

        {/* Cart Items */}
        {cartItems.length >= 1 && (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="item-card">
                  <div className="item-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="item-details">
                    {/* Product Title and Remove Button */}
                    <div className="name-and-remove">
                      <h3>{item.title}</h3>
                      <button
                        type="button"
                        onClick={() => onRemove(item)}
                        className="remove-item"
                      >
                        <HiOutlineTrash size={28} />
                      </button>
                    </div>
                    <p className="delivery-est">Delivery Estimation: 5 Working Days</p>

                    {/* Price and Quantity Controls */}
                    <div className="price-and-qty">
                      <span className="price">${(item.price * item.quantity).toFixed(2)}</span>
                      <div className="quantity-controls">
                        <span
                          className="minus"
                          onClick={() => toggleCartItemQuantity(item.id, 'dec')}
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className="num">{item.quantity}</span>
                        <span
                          className="plus"
                          onClick={() => toggleCartItemQuantity(item.id, 'inc')}
                        >
                          <AiOutlinePlus />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="order-summary">
              <h3>Order Summary</h3>
              <div className="qty">
                <p>Total Quantity:</p>
                <span>{totalQty} Product(s)</span>
              </div>
              <div className="subtotal">
                <p>Sub Total:</p>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button className="btn" type="button" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
