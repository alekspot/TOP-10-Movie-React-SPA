import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

import { setSliderSetting } from './slider-settings';
import Zoom from './Zoom';

const Gallery = ({images}) => {
  
  const [img,setImg] = useState(images[0]);
  const [showZoom, setShow] = useState(false);

  const handleClick = () => ( showZoom ? setShow(false) : true);  //убрать зум при клике

  const onClickImg = (img) => {
    setImg(img);
    setShow(true);
  }

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  },[handleClick])

  const slides = images.map((img, index) => { //слайды
          
    return (
      <div key={index}  className="gallery__slide">
        <div key={index} className="gallery__item">
          <img className="gallery__img" src={img} alt="" onClick={() => onClickImg(img)}/>
        </div>
      </div>
    )
  })
  
  return (
    <div className="gallery" style={images.length <=3 ? {maxWidth: 420}:{maxWidth: '100%'}}> 
      <Slider {...setSliderSetting(images)}>
        {slides}
      </Slider>
      <Zoom showZoom={showZoom} img={img}/>
    </div>
  )
}

export default Gallery