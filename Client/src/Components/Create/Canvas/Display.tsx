import React from "react";
import { useSelector } from "react-redux";
import Waves from "../Animations/Waves";
import Particles from "../Animations/Particles";
import BackgroundColor from "../Animations/BackgroundColor";
import * as Type from "../../../Types";
import CanvasStage from "./CanvasContainer";

const Display = () => {
  const data: Type.CanvasTypes = useSelector((state) => state.canvasReducer);
  const background: Type.BackgroundType = data.background;
  const peragraph: Type.Peragraph = data.peragraph;
  const images: { [key: string]: Type.ImageType } = data.images;
  return (
    <React.Fragment>
      <BackgroundColor background={background.backgroundColor} />
      <CanvasStage images={images} peragraph={peragraph} />

      {background.particles.state ? (
        <Particles particles={background.particles} />
      ) : null}
      {background.particles.waves ? <Waves /> : null}
    </React.Fragment>
  );
};

export default React.memo(Display);
