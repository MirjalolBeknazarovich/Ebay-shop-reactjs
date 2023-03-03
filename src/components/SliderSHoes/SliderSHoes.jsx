import './SliderShoes.scss';
import Container from '../../Utils/Container';
import React, { Component } from "react";
import Slider from "react-slick";
import useFetchData from '../../hooks/useFetchData';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';


const SliderSHoes = () => {
    const [ data, isLoading ] = useFetchData('/categories/4/products?offset=10&limit=5')
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
                !isLoading ?
                    <div className='slidershoes'>
                        <div className="slidershoes_top_box">
                            <h1>Score these trending kicks</h1>
                            <Link to="/categoriesresult/4">
                                <button>See all <FiArrowRight className='slidershoes_top_box_icon' /></button>
                            </Link>
                        </div>
                        <div className='slidershoes_map' style={{ width: 1257 }}>        
                            <Slider {...settings}>
                            {
                                data.map( item => 
                                    <div key={item.id} className='slidershoes_map_box'>
                                        <Link key={item.id} to={`product/${item.title}`}>
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

export default SliderSHoes