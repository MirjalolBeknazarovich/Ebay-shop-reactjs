import React from 'react';
import './Hero.scss';
import Container from '../../Utils/Container';
import {AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import Loading from '../Loading/Loading';
import { useSelector } from 'react-redux';

const Hero = () => {
  const [ data, isLoading ] = useFetchData("/categories");


  const likedProduct = useSelector(state => state.likedReducer)
  
  return (
    <section className='hero'>
      <Container>
        {
          !isLoading ? 
            <div className='hero_wrapper'>
            <ul className='hero_list'>
              <li className='hero_item_home'>Home</li>
              <Link to="/saved" >
                <li className='hero_item hero_item_icon'>
                  <AiFillHeart className='hero_item_icon_heard'/>
                  <span>
                    {
                      likedProduct.likedProducts?.length
                    }
                  </span>
                  <span className='hero_item_saved'>Saved</span>
                </li>
              </Link>
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
          : <Loading />
        }
      </Container>
    </section>
  )
}

export default Hero