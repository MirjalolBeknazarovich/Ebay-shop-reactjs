import './SliderProduct.scss';
import Container from '../../Utils/Container';
import React, { Component } from "react";
import Slider from "react-slick";
import { FiArrowRight } from 'react-icons/fi';
import useFetchData from '../../hooks/useFetchData';
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'

const SliderProduct = () => {
    const [ data, isLoading ] = useFetchData('/categories/3/products?offset=10&limit=4')
    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 1000
      };
  return (
    <section>
        <Container>
            {
                !isLoading?
                    <div className='sliderproduct'>
                        <div className='sliderproduct_left_box'>
                            <h3 className="sliderproduct_title">Up to 60% off <br /> home must- <br /> haves</h3>
                            <p className='sliderproduct_text'>Shop mattresses, <br /> toppers, and more.</p>
                            <Link to="/categoriesresult/3">
                                <button className='sliderproduct_btn'>Shop now <FiArrowRight className='sliderproduct_btn_icon'/></button>
                            </Link>
                        </div>
                        <div>
                            <div style={{ width: 1128 }}>        
                                <Slider {...settings}>
                                {
                                    data.map( item => 
                                        <div key={item.id} className='sliderproduct_map_box'>
                                            <Link key={item.title} to={`product/${item.title}`}>
                                                <img className='sliderproduct_map_img' src={item.images} alt="" />
                                            </Link>
                                            <span className='sliderproduct_map_price'>${item.price - 10}</span>
                                            <p className='sliderproduct_map_price sliderproduct_map_price_cost'> $  <p className='sliderproduct_map_price_sell'>{item.price} </p>  10% OFF</p>
                                        </div>
                                        )
                                }
                                </Slider>
                            </div>
                        </div>
                    </div>
                : <Loading />
            }
        </Container>
    </section>
  )
}

export default SliderProduct