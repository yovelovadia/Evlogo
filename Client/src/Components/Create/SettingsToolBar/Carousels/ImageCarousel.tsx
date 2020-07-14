import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fetchData from "../../../../customeFunctions/fetchData";
import ImageInsideCarousel from "./ImageInsideCarousel";

var settings = {
  // settings for carousel
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
};

const ImageCarousel: React.FC = () => {
  const [images, setImages] = useState<any[] | null>(null);

  useEffect(() => {
    const getImages = async (): Promise<void> => {
      const data: any = await fetchData(
        "http://localhost:5000/Assets/getDefaultImages",
        "get"
      );
      setImages(data.data);
    };
    getImages();
  }, []);

  return (
    <div className={"backgroudCarousel grab"}>
      {images ? (
        <Slider {...settings}>
          {images
            ? images.map((image) => (
                <ImageInsideCarousel
                  imageSrc={`http://localhost:5000/${image.img}`}
                  key={image._id}
                />
              ))
            : null}
        </Slider>
      ) : null}
    </div>
  );
};

export default ImageCarousel;
