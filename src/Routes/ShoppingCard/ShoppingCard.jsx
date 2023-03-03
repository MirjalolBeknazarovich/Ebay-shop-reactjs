import React from 'react'
import { useSelector } from 'react-redux'

const ShoppingCard = () => {
  const basketProduct = useSelector( state => state);
  console.log(basketProduct);
  return (
    <div>ShoppingCard</div>
  )
}

export default ShoppingCard