import React, { useState } from "react";
import { Props } from "../../../../Types";
import { useDispatch } from "react-redux";

const ImageInCarousel: React.FC<Props> = (props) => {
  const dispatch: any = useDispatch();
  const [src, setSrc] = useState<string>(props.src);

  return (
    <div className={"imagesOnCarouselContainer "}>
      <img
        src={src}
        className={"imagesOnCarousel"}
        alt={"Image not found"}
        onError={() => {
          setSrc(`http://localhost:5000/${src}`);
        }}
      />
      <input
        onClick={() => {
          dispatch({ type: "IMAGE_ADD", value: src }); // adding new image to redux...
        }}
        type={"button"}
        value={"Add"}
        className={"addStickerButton"}
      />
    </div>
  );
};

export default ImageInCarousel;
