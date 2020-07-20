import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Image as KonvaImage } from "react-konva";
import { ImageType, ImageProps } from "../../../Types";

const CanvasImage: React.FC<ImageProps> = (props) => {
  const dispatch = props.dispatch;
  const newImage: HTMLImageElement = new Image();
  newImage.src = props.image.src;
  const imageRef: React.MutableRefObject<any> = useRef();

  const storeCordInRedux = (data: any): void => {
    console.log(data);
    const x: number = data.currentTarget.attrs.x;
    const y: number = data.currentTarget.attrs.y;
    const scaleX: number = data.currentTarget.attrs.scaleX;
    const scaleY: number = data.currentTarget.attrs.scaleY;
    const rotation: number = data.currentTarget.attrs.rotation;
    const imageID: string = props.imageID;

    const cords: ImageType = { x, y, rotation, imageID, scaleX, scaleY };
    dispatch({ type: "IMAGE_CORDINATES", value: cords });
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
      onMouseDown={() => props.selected(imageRef)}
      onDragEnd={(e) => {
        storeCordInRedux(e);
      }}
      onTransformEnd={(e) => {
        storeCordInRedux(e);
      }}
    />
    // <Rect
    //   ref={testRef}
    //   x={20}
    //   y={50}
    //   width={100}
    //   height={100}
    //   fill="red"
    //   shadowBlur={10}
    //   draggable
    //   onMouseDown={(e) => {
    //     props.selected(testRef);
    //     console.log(e);
    //   }}
    //   onTransformEnd={(e) => console.log(e)}
    // />
  );
};

export default CanvasImage;
