import Container from '../../Utils/Container';
import React, { Component } from "react";
import Slider from "react-slick";
import { FiArrowRight } from 'react-icons/fi';
import useFetchData from '../../hooks/useFetchData';
import divImg from '../../images/div.svg';
import './SliderEbay.scss';
import ebay from '../../images/ebay.svg';
import {Link} from "react-router-dom";
import Loading from '../Loading/Loading'

const SliderEbay = () => {
    const [ data, isLoading ] = useFetchData('/categories')
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
                <div className='sliderEbay'>
                    <div className='sliderEbay_left_box'>
                        <span className='sliderEbay_left_box_copy'>Featured</span>
                        <img src={ebay} alt="img" />
                        <h3 className="sliderEbay_title">Deals made easy all year long.</h3>
                        <p className='sliderEbay_text'>Free shipping. Best prices.</p>
                        <button className='sliderEbay_btn'>Shop now <FiArrowRight className='sliderEbay_btn_icon'/></button>
                    </div>
                    <div>
                        <div style={{ width: 700 }}>        
                            <Slider {...settings}>
                            {
                                data.map( item => 
                                    <div key={item.id} className='sliderEbay_map_box'>
                                        <Link to={`/categoriesresult/${item.id}`}>
                                            <img className='sliderEbay_map_img' src={item.image} alt="" />
                                        </Link>
                                    </div>
                                    )
                            }
                            </Slider>
                        </div>
                    </div>
                    <div className='sliderEbay_bottom_box'>
                        <img className='sliderEbay_bottom_box_img' src={divImg} alt="img" />
                    </div>
                </div>
            : <Loading />
           }
        </Container>
    </section>
  )
}

export default SliderEbay