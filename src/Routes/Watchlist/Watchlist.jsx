import React from 'react';
import { useSelector } from 'react-redux';

const Watchlist = () => {
  const watchlistProduct = useSelector( state => state.createReducer )
  console.log(watchlistProduct);
  return (
    <div>Watchlist</div>
  )
}

export default Watchlist