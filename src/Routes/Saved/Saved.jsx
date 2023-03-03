import React from 'react';
import { useSelector } from 'react-redux';

const Saved = () => {

  const likedProduct = useSelector(state => state)
  console.log(likedProduct);
  return (
    <div>Saved</div>
  )
}

export default Saved