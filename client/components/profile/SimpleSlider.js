import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const SimpleSlider = (props) => {
  const { books, tvs, movies } = props || [];
  const items = books || tvs || movies || [];

  let settings = {
    dots: true,
    infinite: items.length > 10,
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
          infinite: items.length > 7,
          dots: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: items.length > 5,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: items.length > 3,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: items.length > 2,
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
              <Link to={`/${item.productType}s/${item.id}`}>
                <img src={item.imageUrl} alt="image" />
              </Link>
            </div>
          ))
        ) : (
          <div>No featured</div>
        )}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
