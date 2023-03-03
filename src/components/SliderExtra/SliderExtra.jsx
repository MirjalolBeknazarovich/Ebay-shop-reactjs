import './SliderExtra.scss'
import Container from '../../Utils/Container';
import React, { Component } from "react";
import Slider from "react-slick";
import useFetchData from '../../hooks/useFetchData';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';


const SliderExtra = () => {
    const [ data, isLoading ] = useFetchData('/categories/5/products?offset=10&limit=5')
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
            {
                !isLoading ?
                    <div className='slidershoes'>
                        <div className="slidershoes_top_box">
                            <h1>Extra 20% off for Presidents' Day</h1>
                            <button>See all <FiArrowRight className='slidershoes_top_box_icon' /></button>
                        </div>
                        <div className='slidershoes_map' style={{ width: 1257 }}>        
                            <Slider {...settings}>
                            {
                                data.map( item => 
                                    <div key={item.id} className='slidershoes_map_box'>
                                        <Link to={`product/${item.title}`}>
                                            <img className='slidershoes_map_img' src={item.images} alt="" />
                                        </Link>
                                        <p>{item.title}</p>
                                    </div>
                                    )
                            }
                            </Slider>
                        </div>
                    </div>
                : <Loading />
            }
        </Container>
    </section>
  )
}

export default SliderExtra