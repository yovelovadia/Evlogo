import React, { useState } from "react";
import SettingsToolBar from "../Components/Create/SettingsToolBar/SettingsToolBar";
import DraggableImage from "../Components/Create/BleesingArea/DraggableImage";
import BlessingPeragraph from "../Components/Create/BleesingArea/BlessingPeragraph";
import { useSelector } from "react-redux";

const CreateScreen: React.FC = () => {
  const images = useSelector((state) => state.blessingSettings.images);

  return (
    <div className={"BlessingLocation"}>
      <SettingsToolBar />
      {images
        ? Object.keys(images).map((item) => (
            <DraggableImage
              data={images[item].imageSrc}
              imageID={item}
              key={item}
            /> // container for a draggable image each images[item] is an image with its settings
          ))
        : null}
      <BlessingPeragraph />
    </div>
  );
};

export default CreateScreen;
