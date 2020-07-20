import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BackgroundType } from "../../../types";

const Background: React.FC = () => {
  const dispatch = useDispatch();
  const background: BackgroundType = useSelector(
    (state) => state.canvas.background
  );

  const changeColor = (data: any, picked: string): void => {
    const value: { color: string; picked: string } = {
      color: data.target.value,
      picked,
    };
    dispatch({ type: "BACKGROUND_CHANGE", value });
  };

  return (
    <div>
      <input
        onChange={(data) => changeColor(data, "color1")}
        type={"color"}
        className={"colorPicker"}
        value={background.color1}
      />
      <input
        onChange={(data) => changeColor(data, "color2")}
        type={"color"}
        className={"colorPicker"}
        value={background.color2}
      />
    </div>
  );
};

export default Background;
