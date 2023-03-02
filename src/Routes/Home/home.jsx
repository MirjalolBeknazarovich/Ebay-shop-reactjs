import React from 'react';
import Category from '../../components/Category/Category';
import SliderComponent from '../../components/Slider/Slider';
import SliderProduct from '../../components/SliderProduct/SliderProduct';
import SliderSHoes from '../../components/SliderSHoes/SliderSHoes';
import SliderExtra from '../../components/SliderExtra/SliderExtra';
import SliderEbay from '../../components/SliderEbay/SliderEbay';
import SliderToday from '../../components/SliderToday/SliderToday';

const home = () => {
  return (
    <>
      <main>
        <SliderComponent />
        <SliderProduct />
        <SliderSHoes />
        <SliderExtra />
        <SliderEbay />
        <SliderToday />
        <Category />
      </main>
    </>
  )
}

export default home