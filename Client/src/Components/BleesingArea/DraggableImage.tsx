import React from "react";
import { DraggableCore } from "react-draggable";
import { Props } from "../../Types";
import { useSelector, useDispatch } from "react-redux";
import { Cordinates } from "../../Types";
import getWindowDimensions from "../../customeFunctions/getWindowDimensions";

const DraggableImage: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const imageSettings = useSelector(
    (state) => state.blessingSettings.images[props.imageID]
  );

  const storeCordinatesRedux = <T extends any>(data: T): void => {
    const windowDimension = getWindowDimensions();
    let xPosition: number = (data.x * 100) / windowDimension.screenWidth; // taking data turning it to precentage
    let yPosition: number = (data.y * 100) / windowDimension.screenHeight;

    dispatch<Cordinates>({
      type: "IMAGE_CORDINATES",
      value: {
        xPosition,
        yPosition,
        windowDimension: getWindowDimensions(),
        imageID: props.imageID,
      },
    });
  };

  return (
    <DraggableCore handle={".handle"} onDrag={storeCordinatesRedux}>
      <div
        className={"handle draggableImageContainer"}
        style={{
          left: imageSettings.position.xPosition
            ? `${imageSettings.position.xPosition}%`
            : "10%",
          top: imageSettings.position.xPosition
            ? `${imageSettings.position.yPosition}%`
            : "10%",
        }}
      >
        <img
          draggable={"false"}
          src={props.data}
          className={"draggableImage grab"}
          alt={"draggbleImage"}
        />
        <button
          onClick={() => {
            dispatch({ type: "IMAGE_REMOVE", value: props.imageID }); //fix this
          }}
          className={"draggableImageDeleteIcon"}
        >
          &#x1F5D1;
        </button>
      </div>
    </DraggableCore>
  );
};

export default DraggableImage;
