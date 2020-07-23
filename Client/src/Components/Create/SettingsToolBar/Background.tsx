import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BackgroundType } from "../../../types";

const Background: React.FC = () => {
  const dispatch = useDispatch();
  const background: BackgroundType = useSelector(
    (state) => state.canvas.background
  );

  const changeBgAtt = (bgKey: string, bgValue: string | number): void => {
    dispatch({ type: "BACKGROUND_CHANGE_ATT", value: { bgKey, bgValue } });
  };

  return (
    <div id={"background"}>
      <input
        onChange={(data) => changeBgAtt("color1", data.target.value)}
        type={"color"}
        className={"colorPicker"}
        value={background.color1}
      />
      <input
        onChange={(data) => changeBgAtt("color2", data.target.value)}
        type={"color"}
        className={"colorPicker"}
        value={background.color2}
      />
      <h3>{background.degree}&#xb0;</h3>
      <input
        type={"range"}
        className={"slider"}
        min={0}
        max={360}
        value={background.degree}
        onChange={(data) => changeBgAtt("degree", data.target.value)}
      />
    </div>
  );
};

export default Background;
