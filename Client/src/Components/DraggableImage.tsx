import React from "react";
import Draggable from "react-draggable";
import { Props } from "../Types";

const DraggableImage: React.FC<Props> = (props) => {
  return (
    <Draggable grid={[50, 50]} bounds={"parent"}>
      <img
        draggable={"false"}
        src={props.src}
        className={"draggableImage grab"}
      />
    </Draggable>
  );
};

export default DraggableImage;
