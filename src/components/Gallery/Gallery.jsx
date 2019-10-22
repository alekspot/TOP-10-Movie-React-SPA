import React, { useState, useEffect } from 'react';
import Zoom from './Zoom';
import Slider from "react-slick";

const Gallery = ({images}) => {
  
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: images.length > 3 ? 8 : 3,
    
    slidesToScroll: 2,
    initialSlide: 0,
    touchMove: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: images.length > 3 ? 7 : 3,
          slidesToScroll: 2,
          
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: images.length > 3 ? 5 : 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: images.length > 3 ? 4 : 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

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
  
  return (
    <div className="gallery" style={images.length <=3 ?{maxWidth: 420}:{maxWidth: '100%'}}> 
      <Slider {...settings}>
        {images.map((img, index) => {
          
        return (
          <div key={index}  className="gallery__slide">
            <div key={index} className="gallery__item">
              <img className="gallery__img" src={img} alt="" onClick={() => onClickImg(img)}/>
            </div>
          </div>
        )
        })}
      </Slider>
      <Zoom showZoom={showZoom} img={img}/>
    </div>
  )
}

export default Gallery