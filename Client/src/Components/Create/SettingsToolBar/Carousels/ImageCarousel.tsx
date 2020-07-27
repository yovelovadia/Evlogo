import React, { useState, useEffect, ReactElement } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fetchData from "../../../../customeFunctions/fetchData";
import ImageInsideCarousel from "./ImageInsideCarousel";

const ImageCarousel: React.FC<{ userImages: boolean; refresh: boolean }> = (
  props
) => {
  const [images, setImages] = useState<any[]>([]);

  // settings for carousel
  var settings = {
    dots: true,
    infinite: images.length < 3 ? false : true,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  //get the images from the server both user(based on userID) and default images
  useEffect(() => {
    const getImages = async (): Promise<void> => {
      const data: any = await fetchData(
        props.userImages
          ? "http://localhost:5000/Assets/getUserImages"
          : "http://localhost:5000/Assets/getDefaultImages",
        "get"
      );
      setImages(data.data);
    };
    getImages();
  }, [props.refresh]);

  return (
    <div className={"backgroudCarousel grab"}>
      {images ? (
        <Slider {...settings}>
          {images
            ? images.map(
                (image: {
                  _id: string;
                  img: string;
                }): ReactElement<string, string> => (
                  <ImageInsideCarousel src={image.img} key={image._id} />
                )
              )
            : null}
        </Slider>
      ) : null}
    </div>
  );
};

export default ImageCarousel;
