import React, { useState } from "react";
import { Props } from "../../../../Types";
import { useDispatch } from "react-redux";

const ImageInCarousel: React.FC<Props> = (props) => {
  const dispatch: any = useDispatch();

  return (
    <div className={"imagesOnCarouselContainer "}>
      <img
        src={props.imageSrc}
        className={"imagesOnCarousel"}
        alt={"#"}
        onError={(e) =>
          (e.currentTarget.src =
            "https://developers.google.com/maps/documentation/maps-static/images/error-image-generic.png?hl=es-419")
        }
      />
      <input
        onClick={() => {
          dispatch({ type: "IMAGE_ADD", value: props.imageSrc }); // adding new image to redux...
        }}
        type={"button"}
        value={"Add"}
        className={"addStickerButton"}
      />
    </div>
  );
};

export default ImageInCarousel;
