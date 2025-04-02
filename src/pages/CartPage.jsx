import React from 'react'
import { useCart } from '../context/CartContext'
import '../styles/carpage.css'

export const CartPage = () => {
    const {cart,removeFromCart}=useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-page">
        <img src="cart.jpeg" width='60px' />
        {cart.length > 0 && <h3 className='tot'>Total: &#8377;~{totalPrice.toFixed(2)}</h3>}
        {cart.length===0?(
            <p>Your Cart Is Empty1</p>
        ):(
            <div className="cart-items">
                {cart.map((product,index)=>(
                    <div key={index} className="cart-item">
                        <img src={product.image} alt={product.name} />
                        <div>
                            <h3>{product.name}</h3>
                            <p>&#8377;{product.price}</p>
                            <button className="remove-btn" onClick={() => removeFromCart(product.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}
