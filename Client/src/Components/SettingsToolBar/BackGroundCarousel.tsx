import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Props } from "../../Types";

const BackGroundCarousel: React.FC<Props> = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  return (
    <div className={"backgroudCarousel grab"}>
      <Slider {...settings}>
        <div className={"imagesOnCarouselContainer "}>
          <img
            className={"imagesOnCarousel"}
            src={require("../../Assets/crown.png")}
          />

          <input
            onClick={(clickEvent) => {
              props.addImage(
                clickEvent,
                "https://images.unsplash.com/photo-1535332371349-a5d229f49cb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
              );
            }}
            type={"button"}
            value={"Add"}
            className={"addStickerButton"}
          />
        </div>
        <div className={"imagesOnCarouselContainer"}>
          <img
            className={"imagesOnCarousel"}
            src={require("../../Assets/hearts.jpg")}
          />
        </div>
        <div className={"imagesOnCarouselContainer"}>
          <img
            className={"imagesOnCarousel"}
            src={require("../../Assets/happyBirthday.png")}
          />
        </div>
        <div>
          <h1>622</h1>
          <h1>733</h1>
        </div>
      </Slider>
    </div>
  );
};

export default BackGroundCarousel;
