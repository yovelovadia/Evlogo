import React, { useState } from "react";
import { Props } from "../../../../Types";
import { useDispatch } from "react-redux";
import { addImage } from "../../../../redux/actions";

const ImageInCarousel: React.FC<Props> = (props) => {
  const dispatch: any = useDispatch();
  const [src, setSrc] = useState<string>(props.src);

  return (
    <div className={"imagesOnCarouselContainer "}>
      <img src={src} className={"imagesOnCarousel"} alt={"Image not found"} />
      <input
        onClick={() => {
          dispatch(addImage(src)); // adding new image to redux...
        }}
        type={"button"}
        value={"Add"}
        className={"addStickerButton"}
      />
    </div>
  );
};

export default ImageInCarousel;

//          dispatch(addImage(`http://localhost:5000/${src}`)); // adding new image to redux...
