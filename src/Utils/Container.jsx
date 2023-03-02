import React from 'react';
import './Utils.scss';

const Container = (props) => {
  return (
    <div className='container'>
        {props.children}
    </div>
  )
}

export default Container