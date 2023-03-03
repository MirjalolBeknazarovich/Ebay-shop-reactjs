import React, { Component } from 'react';
import useFetchData from '../../hooks/useFetchData';
import { useParams } from 'react-router-dom';
import './Product.scss';
import Container from '../../Utils/Container';
import { FiHeart } from 'react-icons/fi';
import CategoriesResult from '../CategoriesResult/CategoriesResult';
import { useState } from 'react';
import Category from '../../components/Category/Category';
import Loading from '../../components/Loading/Loading';
import { useDispatch } from 'react-redux';


// import { baseUrl } from "./config";

const Product = () => {
    const productId = useParams()
    // console.log(productId)
    const [data, isLoading] = useFetchData(`products/?title=${productId.title}`)
    // const dataCategory = useFetchData(`/products/?categoryId=${data}`);
    // console.log(dataCategory);

    const dispatch = useDispatch()

    const addTolike = (product) => {
        dispatch({ 
            product,
            type: "LIKE_PRODUCT"
        })
    }


    const addToWatchlist = (product) => {
        dispatch({ 
            product,
            type: "ADD_WATCHLIST"
        })
    }


    const addToBasket = (product) => {
        dispatch({ 
            product,
            type: "ADD_BASKET"
        })
    }


  return (
    <>
        <section> 
            <Container>
                {
                    !isLoading?
                        <div>                
                            {
                                data.map((item, index) => 
                                    <div key={index}>
                                        <div>
                                            <img key={index} src={item.images} alt="img" />
                                        </div>

                                        <div>
                                            <div>
                                                <div>
                                                    <h4>{item.title}</h4>
                                                    <p>{item.description}</p>
                                                    <span>${item.price}</span>
                                                </div>
                                                <FiHeart onClick={() => addTolike(item)} />
                                                <button onClick={() => addToWatchlist(item)}>witchlist</button>
                                                <button onClick={() => addToBasket(item)}>add basket</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    :<Loading />
                }
                <CategoriesResult /> 
            </Container>
        </section>
    </>
  )
}

export default Product