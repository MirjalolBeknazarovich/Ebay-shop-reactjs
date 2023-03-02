import React from 'react';
import './Hero.scss';
import Container from '../../Utils/Container';
import {AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';

const Hero = () => {
  const data = useFetchData("/categories");
  
  return (
    <section className='hero'>
      <Container>
        <div className='hero_wrapper'>
          <ul className='hero_list'>
            <li className='hero_item_home'>Home</li>
            <li className='hero_item hero_item_icon'><AiFillHeart className='hero_item_icon_heard'/><span className='hero_item_saved'>Saved</span></li>
            {
              data.map( item => 
                  <li key={item.id} className='hero_item'>
                    <Link to={`/categoriesresult/${item.id}`} key={item.id}>{item.name}</Link>
                  </li>
                )
            }
            <li className='hero_item'>
              <Link to='/deals'>
                Deals
              </Link>
            </li>
            <li className='hero_item'>
              <Link to='/sellhero'>
                Sell
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default Hero