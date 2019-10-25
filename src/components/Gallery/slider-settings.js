export const setSliderSetting = (images) => ({
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
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          touchMove: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 420,
        settings: {
          touchMove: true,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
})