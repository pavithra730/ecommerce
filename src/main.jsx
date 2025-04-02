import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { CartProvider } from './context/CartContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <CartProvider>
       <App/>
     </CartProvider>
  </BrowserRouter>
     
  
  
);
