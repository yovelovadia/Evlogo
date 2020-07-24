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
import fetchData from "../../../customeFunctions/fetchData";

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

  const canvasRef: any = useRef();

  return (
    <React.Fragment>
      <Stage
        ref={canvasRef}
        className={"canvas"}
        width={window.screen.width}
        height={3000}
        onMouseDown={(e) => deSelect(e)}
        style={{
          background: `linear-gradient(${background.degree}deg,${
            background.color1
          },${background.color2 ? background.color2 : background.color1})`,
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
