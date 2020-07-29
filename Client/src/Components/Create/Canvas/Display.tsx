import React from "react";
import { useSelector } from "react-redux";
import Waves from "../Animations/Waves";
import Snow from "../Animations/Snow";
import BackgroundColor from "../Animations/BackgroundColor";
import * as Type from "../../../Types";
import CanvasStage from "./CanvasStage";

const Display = () => {
  const data: Type.CanvasTypes = useSelector((state) => state.canvasReducer);
  const background: Type.BackgroundType = data.background;
  const peragraph: Type.Peragraph = data.peragraph;
  const images: { [key: string]: Type.ImageType } = data.images;

  return (
    <React.Fragment>
      <BackgroundColor background={background} />
      <CanvasStage images={images} peragraph={peragraph} />
      {background.snow ? <Snow /> : null}
      {background.waves ? <Waves /> : null}
    </React.Fragment>
  );
};

export default Display;
