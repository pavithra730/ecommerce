import { CartPage } from './pages/CartPage'
import { CheckoutPage } from './components/CheckoutPage'
import { Navbar } from './components/Navbar'
import { ProductList } from './pages/ProductList'
import { Home } from './pages/Home'
import {Routes,Route} from "react-router-dom"

function App() {
  

  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/productlist" element={<ProductList/>}/>
      <Route path="/cartpage" element={<CartPage/>}/>
      <Route path="/checkoutpage" element={<CheckoutPage/>}/>
    </Routes>
    
   </div>
  )
}

export default App
