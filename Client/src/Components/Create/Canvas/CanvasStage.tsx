import React, { useState, useEffect, useRef } from "react";
import CanvasImage from "./CanvasImage";
import { useSelector, useDispatch } from "react-redux";
import CanvasPeragraph from "./CanvasPeragraph";
import { Transformer, Stage, Layer } from "react-konva";
import { imageDelete } from "../../../redux/actions";
import { CanvasTypes, ImageType, Peragraph } from "../../../Types";

const CanvasStage: React.FC = () => {
  const data: CanvasTypes = useSelector((state) => state.canvasReducer);
  const images: { [key: string]: ImageType } = data.images;
  const peragraph: Peragraph = data.peragraph;
  const [selectedElement, selectShape] = useState<any>(null);
  const [imageID, setImageID] = useState<null | string>(null);
  const dispatch: any = useDispatch();

  console.log("bla");

  const deSelect = (event: any): void => {
    if (event.target === event.target.getStage()) {
      selectShape(null);
    }
  };

  const deleteImage = () => {
    dispatch(imageDelete(imageID));
    selectShape(null);
  };

  useEffect(() => {
    const deleteOnBackspace = (data) => {
      if (imageID && data.key === "Backspace") {
        deleteImage();
      }
    };

    document.body.addEventListener("keydown", deleteOnBackspace);
    return () => {
      document.body.removeEventListener("keydown", deleteOnBackspace);
    };
  }, [imageID]);

  return (
    <React.Fragment>
      {/* trash can will be shown only when element will be selected and will delete by the id taken */}
      {selectedElement ? (
        <h1 onClick={deleteImage} className={"trashCan"}>
          &#128465;
        </h1>
      ) : null}

      <Stage
        className={"canvas"}
        width={window.screen.width}
        height={3000}
        onMouseDown={(e) => deSelect(e)}
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
              selectedID={(id) => setImageID(id)}
            />
          ))}

          {selectedElement ? (
            <Transformer
              nodes={[selectedElement]}
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

export default React.memo(CanvasStage);
