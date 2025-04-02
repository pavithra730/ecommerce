import React from 'react'
import '../styles/productcard.css'
import { useCart } from '../context/CartContext'
import { useState } from 'react';

export const ProductCard = ({product}) => {
    const {addToCart}=useCart();
    

    const handleAddToCart=()=>{

        addToCart(product);
        
    }
    const [added,setAdded]=useState(false);
  return (
    <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>&#8377;{product.price}</p>
        <button className='btn' onClick={handleAddToCart}><span onClick={()=>setAdded(true)} className='cart-button' style={{fontWeight:'bold'}}>{added?"Added✅" : "Add to Cart 🛒"}</span></button>
    
    </div>
  )
}
