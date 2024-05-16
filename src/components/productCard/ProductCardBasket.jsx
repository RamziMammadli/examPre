import React from 'react'
import styles from './ProductCard.module.css'
import Button from '../buttons/Button'

const ProductCardBasket = ({item,sebetdensil}) => {
  return (
    <div className={styles.container}>
        <img src={item.thumbnail} alt="" />
        <div className={styles.textBox}>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.price} AZN</p>
        </div>
        <div style={{display:'flex', justifyContent:'space-between'}}>
           <Button text='Sebetden sil' onclick={sebetdensil}/> 
        </div>
    </div>
  )
}

export default ProductCardBasket