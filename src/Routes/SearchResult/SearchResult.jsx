import React from 'react'
import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import Container from '../../Utils/Container';
import CategoriesResult from '../CategoriesResult/CategoriesResult';
import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './SearchResult.scss'
import { AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';
import Loading from '../../components/Loading/Loading';

const SearchResult = () => {

  const [isIcon, setIsIcon] = useState()

const toogleIcon = (e) => {
  e.preventDefault(); 
  setIsIcon(prevState =>!prevState);
}

  const productInfo = useParams();
  
  const [data, isLoading] = useFetchData(`/products/?title=${productInfo.productName}`);

  return (
    <section> 
      <Container>
        {
          !isLoading ?
          <div>
            <CategoriesResult />
        <div className='searchresult'>
            {
                data.map(item => 
                        <div className='searchresult_box'>
                            <div>
                                <Link to={`/product/${item.title}`}>
                                  <img className='searchresult_img' src={item.images[0]} alt="" />
                                </Link>
                            </div>
                            <div className='searchresult_title-wrapper'>
                                <div className='searchresult_title_box'>
                                    <div className='search__title_box-wrapper'>
                                        <h4 className='searchresult_title'>{item.title}</h4>
                                        <p className='searchresult_text'>{item.description}</p>
                                    </div>
                                    <div className='searchresult_price_box'>
                                      <p className='searchresult_price'>$ {item.price}</p>
                                      {
                                        isIcon ?
                                         <AiFillHeart onClick={toogleIcon} className='searchresult_icon_red'/>
                                         : <FiHeart onClick={toogleIcon} className='searchresult_icon' />
                                        
                                      }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
          </div>
          : <Loading />
        }        
      </Container>
</section>
  )
}

export default SearchResult