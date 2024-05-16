import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import axios from 'axios'
import ProductCard from '../../components/productCard/ProductCard'
import ProductCardBasket from '../../components/productCard/ProductCardBasket'

const Basket = () => {
    const [data, setData] = useState([])

    const getData = () => {
        axios.get('http://localhost:3000/basket')
        .then(res => {
            setData(res.data)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const removeItem = (id) => {
        axios.delete(`http://localhost:3000/basket/${id}`)
        setTimeout(() => {
            getData()
        }, 100);
    }

  return (
    <div>
        <Header/>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', padding:25}}>
            <h1>Sebetim</h1>
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
                {data && data.map(item => <ProductCardBasket item={item} sebetdensil={() => removeItem(item.id)}/>)}
            </div>
        </div>
    </div>
  )
}

export default Basket