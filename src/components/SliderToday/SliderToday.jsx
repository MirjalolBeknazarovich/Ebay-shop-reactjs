import './SliderToday.scss';
import Container from '../../Utils/Container';
import React, { Component } from "react";
import Slider from "react-slick";
import useFetchData from '../../hooks/useFetchData';
import { FiArrowRight } from 'react-icons/fi';

const SliderToday = () => {
    const data = useFetchData('/products')
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
            <div className='slidershoes'>
                <div className="slidershoes_top_box">
                    <h1>Today's Deals – All With Free Shipping</h1>
                    <button>See all <FiArrowRight className='slidershoes_top_box_icon' /></button>
                </div>
                <div className='slidershoes_map' style={{ width: 1390 }}>        
                    <Slider {...settings}>
                    {
                        data.map( item => 
                            <div className='slidertoday_map_box'>
                                <img className='slidertoday_map_img' src={item.images} alt="" />
                                <p className='slidertoday_map_price'>${item.price - 30}</p>
                                <p className='slidertoday_map_cost'>$ <span className='slidertoday_map_cost_span'>{item.price}</span> 30% OFF</p>
                            </div>
                            )   
                    }
                    </Slider>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default SliderToday