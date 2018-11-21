import React, { Component } from 'react';
import Carousel from 'antd/lib/carousel';
import TextHolder from '../TextHolder/TextHolder'
import ImageHolder from '../ImageHolder/ImageHolder'
import Slider from "react-slick";
import 'antd/dist/antd.css';

const ImageSelector = ({ images }) => {
  return (
   <Carousel accessibility>
    {images.map( image => (
      <div className='image-selector-container'>
        <TextHolder/>
        <ImageHolder imagePath={ 'photos/' + image.src }/>
      </div>
    ))}
    </Carousel>
  );
}

export default ImageSelector;
