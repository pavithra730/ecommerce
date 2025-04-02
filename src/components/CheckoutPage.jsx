import React from 'react'
import { useCart } from '../context/CartContext'
import '../styles/checkoutpage.css'
export const CheckoutPage = () => {
    const {cart}=useCart();

  return (
    <div className="checkout-page">
        <h2>CheckOut</h2>
        {cart.length === 0 ? (
        <p>No items to checkout.</p>
      ) : (
        <div>
          <p>Total: &#8377;{cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
          <button className="checkout-btn">Place Order</button>
        </div>
      )}
    </div>
  )
}
