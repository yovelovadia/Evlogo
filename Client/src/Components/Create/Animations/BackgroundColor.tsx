import React from "react";
import { BackgroundType } from "../../../Types";
import { useSelector } from "react-redux";

const BackgroundColor: React.FC<{ background: BackgroundType }> = ({
  background,
}) => {
  return (
    <div
      className={"backgroundColors"}
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
        backgroundSize: background.animated ? "400% 400%" : null,
        animation: background.animated ? "gradient 10s ease infinite" : null,
      }}
    />
  );
};

export default React.memo(BackgroundColor);
