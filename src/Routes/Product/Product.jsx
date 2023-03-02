import React, { Component } from 'react';
import useFetchData from '../../hooks/useFetchData';
import { useParams } from 'react-router-dom';
import './Product.scss';
import Container from '../../Utils/Container';
import { FiHeart } from 'react-icons/fi';
import CategoriesResult from '../CategoriesResult/CategoriesResult';
import { useState } from 'react';


// import { baseUrl } from "./config";

const Product = () => {
    const productId = useParams()
    console.log(productId)
    const data = useFetchData(`products/?title=${productId.title}`)
    console.log(data.images);
    // const dataCategory = useFetchData(`/products/?categoryId=${data}`);
    // console.log(dataCategory);

    //// Slider
    const [ sliderData, setSliderData] = useState()


  return (
    <>
        <section> 
            <Container>
                <div>                
                    {
                        data.map((item, index) => 
                                <div>
                                    <div>
                                        <img key={index} src={item.images} alt="img" />
                                    </div>

                                    <div>
                                        <div>
                                            <div>
                                                <h4>{item.title}</h4>
                                                <p>{item.description}</p>
                                                <span>{item.price}</span>
                                            </div>
                                            <FiHeart />
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                </div>
                <CategoriesResult />               
            </Container>
        </section>
    </>
  )
}

export default Product