import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss'
import Container from '../../Utils/Container';
import { FiArrowRight } from 'react-icons/fi';
import useFetchData from '../../hooks/useFetchData';
import SliderImg from '../../images/slider.jpg';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';



const SliderComponent = () => {

    const [ data, isLoading ] = useFetchData('/categories/1/products?offset=10&limit=4')
    const [dataSecond] = useFetchData('/categories/2/products?offset=10&limit=4')
    // console.log(dataSecond)
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };
  return (
    <section>
          <Container>
           {
            !isLoading ?
                <Slider {...settings}>
                <div className='slider_box'>
                    <div className='slider_inbox'>
                        <div>
                            <h3 className="slider_title">Super savings at <br /> the Brand Outlet</h3>
                            <p className='slider_text'>Up to 60% off the brands you love.</p>
                            <Link to="/categoriesresult/1">
                                <button className='slider_btn'>Shop now <FiArrowRight className='arrow_rigth'/></button>
                            </Link>
                        </div>
                        {
                            data.map( item => 
                                <div key={item.id}>
                                    <Link to={`/categoriesresult/${item.category.id}`}>
                                        <button className='map_btn'>See all <FiArrowRight className='arrow_rigth'/></button>
                                    </Link>
                                    <Link to={`product/${item.title}`}>
                                        <img className='slider-img' src={item.images} alt="" />
                                    </Link>
                                </div>                           
                                )
                            }
                    </div>
                </div>
                <div className='slider_second_box'>
                    <div className='slider_inbox'>
                        <div>
                            <h3 className="slider_second_title">Work, play and<br /> create!</h3>
                            <p className='slider_second_text'>Browse a huge selection of TVs, <br /> laptops, cameras and more</p>
                            <Link to="/categoriesresult/2">
                                <button className='slider-second_btn'>Shop electronics <FiArrowRight className='arrow_second_rigth'/></button>
                            </Link>
                        </div>
                        { dataSecond &&
                            dataSecond.map( item => 
                                <div key={item.name}>
                                    <Link  to={`/categoriesresult/${item.category.id}`}>
                                        <button className='map_second_btn'>See all <FiArrowRight className='arrow_second_rigth'/></button>
                                    </Link>
                                    <Link  to={`product/${item.title}`}>
                                        <img className='slider-img' src={item.images} alt="" />
                                    </Link>
                                </div>                           
                                )
                            }
                    </div>
                </div>
                <div className='slider_box'>
                    <div className='slider_inbox'>
                        <div>
                            <h3 className="slider_title">Trade, train, and <br /> catch'em all!</h3>
                            <p className='slider_text'>Celebrate 27 years of Pokemon with <br /> toys, figures, and games.</p>
                            <button className='slider_btn'>Shop now <FiArrowRight className='arrow_rigth'/></button>
                        </div>
                        <div>
                            <img className='sliderImg' src={SliderImg} alt="img" />
                        </div>
                    </div>
                </div>
                </Slider>
            : <Loading />
           }
          </Container>
    </section>
  )
}

export default SliderComponent