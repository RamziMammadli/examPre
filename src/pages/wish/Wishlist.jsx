import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/productCard/ProductCard'
import Header from '../../components/header/Header'

const Wishlist = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/wishlist')
        .then(res => {
            setData(res.data)
        })
    }, [])

  return (
    <div>
        <Header/>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', padding:25}}>
            <h1>Wishlist</h1>
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
                {data && data.map(item => <ProductCard item={item} />)}
            </div>
        </div>
    </div>
  )
}

export default Wishlist