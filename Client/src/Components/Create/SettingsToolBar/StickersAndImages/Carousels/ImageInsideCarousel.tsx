import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addImage } from "../../../../../redux/actions";

interface Props {
  src?: string;
  data?: any;
  imageID?: string;
}

const ImageInCarousel: React.FC<Props> = (props) => {
  const dispatch: any = useDispatch();
  const [src, setSrc] = useState<string>(
    `https://evlogo.herokuapp.com/${props.src}`
  );
  let checkErrorHeppend = useRef<boolean>(false);

  return (
    <div className={"imagesOnCarouselContainer "}>
      <img
        src={src}
        className={"imagesOnCarousel"}
        alt={"#"}
        onError={() => {
          if (!checkErrorHeppend.current) {
            setSrc(src.slice(28));
          }
          checkErrorHeppend.current = true;
        }}
      />
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
