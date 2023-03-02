import './Category.scss';
import useFetchData from '../../hooks/useFetchData';
import Container from '../../Utils/Container';
import { Link, useParams } from 'react-router-dom';
import React, { Component } from "react";
import Slider from "react-slick";


const Category = () => {
    const data = useFetchData('/categories');
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
    <>
        <section className='category'>
            <Container>
                <div className='category_wrapper'>
                    <h2 className='category_title'>Explore Popular Categories</h2>
                    <div className="category_hero" style={{ width: 1190 }}>
                        <Slider {...settings}>
                            {
                                data.map( item => 
                                        <Link key={item.id}>
                                            <div className='category_wrap'>
                                                <div className='category_div_img'>
                                                    <Link to={`/categoriesresult/${item.id}`}>
                                                        <img className='category_img' src={item.image} alt="" />
                                                    </Link>
                                                </div>
                                                <div className='category_div_name'>
                                                    <h4 className='category_name'>{item.name}</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                            
                            }
                        </Slider>
                    </div>                   
                </div>
            </Container>
        </section>
    </>
  )
}

export default Category