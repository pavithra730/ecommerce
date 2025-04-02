import React from 'react'
import { ProductCard } from '../components/ProductCard'
import prod1 from '../assets/images/prod1.jpeg'
import prod2 from '../assets/images/prod2.jpeg'
import prod3 from '../assets/images/prod3.jpeg'
import prod4 from '../assets/images/prod4.jpeg'
import prod5 from '../assets/images/prod5.jpeg'
import prod6 from '../assets/images/prod6.avif'
import prod7 from '../assets/images/prod7.jpeg'
import prod8 from '../assets/images/prod8.jpeg'
import prod9 from '../assets/images/prod9.jpeg'
import prod11 from '../assets/images/prod11.jpeg'
import prod12 from '../assets/images/prod12.jpeg'
import prod13 from '../assets/images/prod13.jpeg'
import prod14 from '../assets/images/prod14.jpeg'
import prod15 from '../assets/images/prod15.jpeg'
import prod16 from '../assets/images/prod16.jpeg'
import prod17 from '../assets/images/prod17.jpeg'

export const ProductList = () => {
    const products=[
        {id:1,name:'Smart Watch',price:5559,image:prod1},
        {id:2,name:'IPhone',price:78999,image:prod2},
        {id:3,name:'Television',price:40000,image:prod3},
        {id:4,name:'Laptop',price:65000,image:prod4},
        {id:5,name:'SamsungTab',price:55000,image:prod5},
        {id:6,name:'Head Set',price:4499,image:prod6},
        {id:7,name:'Vaccum-Cleaner',price:10200,image:prod7},
        {id:8,name:'Micro-oven',price:8200,image:prod9},
        {id:9,name:'Mixer Grinder',price:6099,image:prod8},
        {id:10,name:'Gold Braclet',price:48665,image:prod11},
        {id:11,name:'Groceries',price:2490,image:prod12},
        {id:12,name:'Vegetables',price:499,image:prod13},
        {id:13,name:'Fruits',price:499,image:prod14},
        {id:14,name:'Bakery Items',price:399,image:prod15},
        {id:15,name:'Chocolates',price:100,image:prod16},
        {id:16,name:'Beauty Products',price:9999,image:prod17}
    ]
  return (
    <div className="product-list">
        {products.map(product=>(
        <ProductCard key={product.id} product={product}/>
        ))}
    </div>
  )
}
