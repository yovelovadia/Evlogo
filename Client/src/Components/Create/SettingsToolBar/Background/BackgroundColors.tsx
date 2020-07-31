import React from "react";
import ColorPicker from "./ColorPicker";
import { BackgroundColorType } from "../../../../Types";
import Slider from "./Slider";

interface Props {
  backgroundColor: BackgroundColorType;
  changeBackgroundAtt: (
    bgColorKey: string,
    bgColorValue: string | number | boolean
  ) => void;
}

const BackgroundColors: React.FC<Props> = ({
  backgroundColor,
  changeBackgroundAtt,
}) => {
  return (
    <div className={"backgroudColorContainer"} id={"background"}>
      <div>
        {/* all the color pickers */}

        <ColorPicker
          activeName={"color1Active"}
          name={"color1"}
          value={backgroundColor.color1}
          onChange={changeBackgroundAtt}
        />

        <ColorPicker
          checked={backgroundColor.color2Active}
          activeName={"color2Active"}
          name={"color2"}
          value={backgroundColor.color2}
          onChange={changeBackgroundAtt}
        />
        <ColorPicker
          checked={backgroundColor.color3Active}
          activeName={"color3Active"}
          name={"color3"}
          value={backgroundColor.color3}
          onChange={changeBackgroundAtt}
        />
        <ColorPicker
          checked={backgroundColor.color4Active}
          activeName={"color4Active"}
          name={"color4"}
          value={backgroundColor.color4}
          onChange={changeBackgroundAtt}
        />
      </div>
      <div className={"backgroundColorSub"}>
        {/* check if animation wanted */}
        <input
          checked={backgroundColor.animated}
          type={"checkbox"}
          onChange={() =>
            changeBackgroundAtt("animated", !backgroundColor.animated)
          }
        />
        <h3>Animated?</h3>
        <Slider
          max={360}
          attName={"degree"}
          value={backgroundColor.degree}
          changeBgAtt={changeBackgroundAtt}
        />
      </div>
    </div>
  );
};

export default React.memo(
  BackgroundColors,
  (prev, next) => prev.backgroundColor === next.backgroundColor
);
