import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from "../img/img1.jpg";
import image2 from "../img/img2.jpg";
import image3 from "../img/img3.jpg"

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Slider {...settings}>
        <div>
          <img
            src={image1}
            alt="Campus"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={image2}
            alt="Campus"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={image3}
            alt="Campus"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
       
      </Slider>
    </div>
  )
}

export default ImageSlider