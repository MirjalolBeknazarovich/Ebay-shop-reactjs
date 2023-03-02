import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import { FiHeart } from 'react-icons/fi';
import Container from "../../Utils/Container"
import Category from '../../components/Category/Category';
import './CategoriesResult.scss'

const CategoriesResult = () => {
  const dataIdCategory  = useParams();
  // console.log(dataIdCategory);
  // setCount(dataIdCategory)

  const data = useFetchData(`/products/?categoryId=${dataIdCategory.id}`)
  console.log(data);
  return (
    <section>
      <Container>
        <Category />
        <div className='categoriesResult'>
          {
            data.map(item => 
              <div className='categoriesResult_box' key={item.id}>
                <Link to={`/product/${item.title}`}>
                  <img className='categoriesResult_box_img' key={item.id} src={item.images} alt="img" />
                </Link>
                <div>
                  <div>
                    <h4 className='categoriesResult_box_title'>{item.title}</h4>
                    <p className='categoriesResult_box_text'>{item.description}</p>                    
                  </div>
                  <div className='categoriesResult_box_price_box'>
                    <span  className='categoriesResult_box_price'>{item.price} </span>
                    <FiHeart className='categoriesResult_box_icon' />
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </Container>
    </section>
  )
}

export default CategoriesResult