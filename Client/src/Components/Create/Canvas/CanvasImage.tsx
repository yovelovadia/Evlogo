import React, { useRef } from "react";
import { Image as KonvaImage } from "react-konva";
import { ImageType } from "../../../Types";
import { imageCordinates } from "../../../redux/actions";

interface Props {
  image: ImageType;
  imageID: string;
  dispatch: any;
  selected: (data: any) => void;
  selectedID: (id: string) => void;
}

const CanvasImage: React.FC<Props> = (props) => {
  const imageRef: React.MutableRefObject<any> = useRef();
  const dispatch = props.dispatch;
  const newImage: HTMLImageElement = new Image();
  newImage.src = props.image.src;

  //after each time the user end dragging image will store all data in redux
  const storeCordInRedux = (data: any): void => {
    const x: number = data.currentTarget.attrs.x;
    const y: number = data.currentTarget.attrs.y;
    const scaleX: number = data.currentTarget.attrs.scaleX;
    const scaleY: number = data.currentTarget.attrs.scaleY;
    const rotation: number = data.currentTarget.attrs.rotation;
    const imageID: string = props.imageID;
    const precentageWidth: number =
      (data.currentTarget.attrs.image.naturalWidth * scaleX * 100) /
      window.screen.width;

    const cords: ImageType = {
      x,
      y,
      rotation,
      imageID,
      scaleX,
      scaleY,
      precentageWidth,
    };
    dispatch(imageCordinates(cords));
  };

  return (
    <KonvaImage
      ref={imageRef}
      image={newImage}
      draggable
      rotation={props.image.rotation}
      x={props.image.x}
      y={props.image.y}
      scaleX={props.image.scaleX || 0.5}
      scaleY={props.image.scaleY || 0.5}
      onMouseDown={() => {
        props.selectedID(props.imageID);
        props.selected(imageRef);
      }}
      onDragEnd={(e) => {
        storeCordInRedux(e);
      }}
      onTransformEnd={(e) => {
        storeCordInRedux(e);
      }}
    />
  );
};

export default CanvasImage;
