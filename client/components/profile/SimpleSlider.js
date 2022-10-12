import React, { Component } from "react";
import Slider from "react-slick";

const SimpleSlider = (props) => {
  const { books, tvs, movies } = props || [];
  let typeOfProduct;
  if (books) {
    typeOfProduct = "book";
  }
  if (movies) {
    typeOfProduct = "movie";
  }
  if (tvs) {
    typeOfProduct = "show";
  }

  const items = books || tvs || movies || [];

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {items.length !== 0 ? (
          items.map((item) => (
            <div key={item.id}>
              <img src={item.imageUrl} alt="image" />
            </div>
          ))
        ) : (
          <div>No featured {typeOfProduct}s</div>
        )}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
