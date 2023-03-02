import './SliderExtra.scss'
import Container from '../../Utils/Container';
import React, { Component } from "react";
import Slider from "react-slick";
import useFetchData from '../../hooks/useFetchData';
import { FiArrowRight } from 'react-icons/fi';


const SliderExtra = () => {
    const data = useFetchData('/categories/5/products?offset=10&limit=5')
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 1000
      };
  return (
    <section>
        <Container>
            <div className='slidershoes'>
                <div className="slidershoes_top_box">
                    <h1>Extra 20% off for Presidents' Day</h1>
                    <button>See all <FiArrowRight className='slidershoes_top_box_icon' /></button>
                </div>
                <div className='slidershoes_map' style={{ width: 1257 }}>        
                    <Slider {...settings}>
                    {
                        data.map( item => 
                            <div className='slidershoes_map_box'>
                                <img className='slidershoes_map_img' src={item.images} alt="" />
                                <p>{item.title}</p>
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

export default SliderExtra