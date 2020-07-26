import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BackgroundType } from "../../../../Types";
import { backgroundChangeAtt } from "../../../../redux/actions";
import BackgroundColorPicker from "./BackgroundColorPicker";

const Background: React.FC = () => {
  const dispatch = useDispatch();
  const background: BackgroundType = useSelector(
    (state) => state.canvasReducer.background
  );

  const changeBgAtt = (bgKey: string, bgValue: string | boolean): void => {
    dispatch(backgroundChangeAtt(bgKey, bgValue));
  };

  return (
    <React.Fragment>
      <div className={"backgroudContainer"} id={"background"}>
        <div>
          {/* all the color pickers */}
          <input
            onChange={(data) => changeBgAtt("color1", data.target.value)}
            type={"color"}
            className={"colorPicker"}
            value={background.color1}
          />

          <BackgroundColorPicker
            checked={background.color2Active}
            activeName={"color2Active"}
            name={"color2"}
            value={background.color2}
          />
          <BackgroundColorPicker
            checked={background.color3Active}
            activeName={"color3Active"}
            name={"color3"}
            value={background.color3}
          />
          <BackgroundColorPicker
            checked={background.color4Active}
            activeName={"color4Active"}
            name={"color4"}
            value={background.color4}
          />
        </div>
        {/* degree of the gradient */}
        <div className={"degreeSlider"}>
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
      </div>
      {/* check if animation wanted */}
      <input
        checked={background.animated}
        type={"checkbox"}
        onChange={() => changeBgAtt("animated", !background.animated)}
      />
      <h3>Animated?</h3>
      <input
        checked={background.waves}
        type={"checkbox"}
        onChange={() => changeBgAtt("waves", !background.waves)}
      />
      <h3>Waves?</h3>
      <input
        checked={background.snow}
        type={"checkbox"}
        onChange={() => changeBgAtt("snow", !background.snow)}
      />
      <h3>Snow?</h3>
    </React.Fragment>
  );
};

export default Background;
