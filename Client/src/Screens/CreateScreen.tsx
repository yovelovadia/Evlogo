import React, { useState } from "react";
import SettingsToolBar from "../Components/SettingsToolBar/SettingsToolBar";
import DraggableImage from "../Components/DraggableImage";

const CreateScreen: React.FC = () => {
  const [images, setImages] = useState([]);

  function addImage(image: string): void {
    setImages([...images, image]);
  }

  return (
    <div className={"BlessingLocation"}>
      <SettingsToolBar
        addImage={(clickEvent, image) => {
          addImage(image);
        }}
      />
      {images ? images.map((image) => <DraggableImage src={image} />) : null}
    </div>
  );
};

export default CreateScreen;
