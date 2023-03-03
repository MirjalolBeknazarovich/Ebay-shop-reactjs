import Container from '../../Utils/Container';
import React, { Component } from "react";
import Slider from "react-slick";
import useFetchData from '../../hooks/useFetchData';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './SliderToday.scss';
import Loading from '../Loading/Loading';


const SliderToday = () => {
    const [ data, isLoading ] = useFetchData('/products');
    
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
                    <div className='slidershoes'>
                        <div className="slidershoes_top_box">
                            <h1>Today's Deals – All With Free Shipping</h1>
                            <button className='slidershoes_top_box_btn'>See all <FiArrowRight className='slidershoes_top_box_icon' /></button>
                        </div>
                        <div style={{ width: 1390 }}>        
                            <Slider {...settings}>
                            {
                                data.map( item => 
                                    <div key={item.id} className='slidertoday_map_box'>
                                            <Link to={`/categoriesresult/${item.id}`}>

                                            <img className='slidertoday_map_img' src={item.images} alt="" />
                                        </Link>
                                        <p className='slidertoday_map_price'>${item.price - 30}</p>
                                        <p className='slidertoday_map_cost'>$ <span className='slidertoday_map_cost_span'>{item.price}</span> 30% OFF</p>
                                    </div>
                                    )   
                            }
                            </Slider>
                        </div>
                    </div> 
                :<Loading />
            }
        </Container>
    </section>
  )
}

export default SliderToday