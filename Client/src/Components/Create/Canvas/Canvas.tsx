import React, { useState, useRef, useEffect } from "react";
import CanvasImage from "./CanvasImage";
import { useSelector, useDispatch } from "react-redux";
import CanvasPeragraph from "./CanvasPeragraph";
import {
  CanvasTypes,
  ImageType,
  Peragraph,
  BackgroundType,
} from "../../../Types";
import { Transformer, Stage, Layer } from "react-konva";
import styled, { keyframes } from "styled-components";

const Canvas = () => {
  const data: CanvasTypes = useSelector((state) => state.canvasReducer);
  const images: { [key: string]: ImageType } = data.images;
  const peragraph: Peragraph = data.peragraph;
  const background: BackgroundType = data.background;
  const [selectedId, selectShape] = useState<any>(null);
  const dispatch: any = useDispatch();

  const deSelect = (event) => {
    if (event.target === event.target.getStage()) {
      selectShape(null);
    }
  };

  return (
    <React.Fragment>
      <Stage
        className={"animation canvas "}
        width={window.screen.width}
        height={3000}
        onMouseDown={(e) => deSelect(e)}
        style={{
          backgroundImage: `linear-gradient(${background.degree}deg, ${
            background.color1
          } ${
            background.color2Active
              ? "," + background.color2
              : "," + background.color1
          } ${background.color3Active ? "," + background.color3 : ""}${
            background.color4Active ? "," + background.color4 : ""
          })`, //background image for dodging conflicts instead of background:
          backgroundSize: "400% 400%",
          animation: background.animated ? "gradient 10s ease infinite" : null,
        }}
      >
        <Layer>
          {Object.keys(images).map((item) => (
            <CanvasImage
              imageID={item}
              image={images[item]}
              key={item}
              dispatch={dispatch} // redux having problems with useDispatch inside canvas object so im passing a refrence
              selected={(data) => {
                selectShape(data.current);
              }}
            />
          ))}

          {selectedId ? (
            <Transformer
              nodes={[selectedId]}
              rotateEnabled
              enabledAnchors={[
                "top-left",
                "top-right",
                "bottom-right",
                "bottom-left",
              ]}
            />
          ) : null}

          <CanvasPeragraph dispatch={dispatch} peragraph={peragraph} />
        </Layer>
      </Stage>
    </React.Fragment>
  );
};

export default Canvas;
