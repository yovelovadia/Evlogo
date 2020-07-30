import React, { useState, useEffect, useCallback } from "react";
import CanvasImage from "./CanvasImage";
import { useDispatch } from "react-redux";
import CanvasPeragraph from "./CanvasPeragraph";
import { imageDelete } from "../../../redux/actions";
import { Peragraph, ImageType } from "../../../Types";
import CanvasStage from "./CanvasStage";

const CanvasContainer: React.FC<{
  images: ImageType;
  peragraph: Peragraph;
}> = ({ peragraph, images }) => {
  const [selectedElement, selectShape] = useState<any>(null);
  const [imageID, setImageID] = useState<null | string>(null);
  const dispatch: any = useDispatch();

  //deSelecting image
  const deSelect = (event: any): void => {
    if (event.target === event.target.getStage()) {
      selectShape(null);
    }
  };

  // deleting image
  const deleteImage = useCallback(() => {
    dispatch(imageDelete(imageID));
    selectShape(null);
  }, [dispatch, imageID]);

  //deleting image on backspace
  useEffect(() => {
    const deleteOnBackspace = (data) => {
      if (imageID && data.key === "Backspace") {
        deleteImage();
      }
    };

    //backspace event listener
    document.body.addEventListener("keydown", deleteOnBackspace);
    return () => {
      document.body.removeEventListener("keydown", deleteOnBackspace);
    };
  }, [selectedElement, imageID, deleteImage]);

  return (
    <React.Fragment>
      {/* trash can will be shown only when element will be selected and will delete by the id taken */}
      {selectedElement ? (
        <h1 onClick={deleteImage} className={"trashCan"}>
          &#128465;
        </h1>
      ) : null}

      <CanvasStage deSelect={deSelect} selected={selectedElement}>
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
        <CanvasPeragraph dispatch={dispatch} peragraph={peragraph} />
      </CanvasStage>
    </React.Fragment>
  );
};

export default React.memo(CanvasContainer);
