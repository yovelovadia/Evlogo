import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageInsideCarousel from "./ImageInsideCarousel";
import { FetchedImages } from "../../../../../Types";

const ImageCarousel: React.FC<{ images: FetchedImages[] }> = ({ images }) => {
  // settings for carousel
  var settings = {
    dots: images?.length > 10 ? false : true,
    infinite: images?.length < 3 ? false : true,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  return (
    <div className={"backgroudCarousel grab"}>
      {images ? (
        <Slider {...settings}>
          {images
            ? images.map((image: { _id: string; img: string }) => (
                <ImageInsideCarousel src={image.img} key={image._id} />
              ))
            : null}
        </Slider>
      ) : null}
    </div>
  );
};

export default React.memo(ImageCarousel);
