import React from "react";
import { useSelector } from "react-redux";
import Waves from "../Animations/Waves";
import Snow from "../Animations/Snow";
import BackgroundColor from "../Animations/BackgroundColor";
import { CanvasTypes, BackgroundType } from "../../../Types";
import CanvasStage from "./CanvasStage";

const Display = () => {
  const data: CanvasTypes = useSelector((state) => state.canvasReducer);
  const background: BackgroundType = data.background;

  return (
    <React.Fragment>
      {/* all the animations and background color/animations */}
      <BackgroundColor background={background} />
      {background.snow ? <Snow /> : null}
      {background.waves ? <Waves /> : null}
      <CanvasStage />
    </React.Fragment>
  );
};

export default Display;
