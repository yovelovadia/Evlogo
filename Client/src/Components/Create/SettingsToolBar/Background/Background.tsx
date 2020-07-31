import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BackgroundType } from "../../../../Types";
import { backgroundChangeAtt } from "../../../../redux/actions";
import BackgroundColors from "./BackgroundColors";
import BackgroundParticles from "./BackgroundParticles";

const Background: React.FC = () => {
  const dispatch = useDispatch();
  const background: BackgroundType = useSelector(
    (state) => state.canvasReducer.background
  );

  const changeBackgroundAtt = React.useCallback(
    (
      bgSection: string,
      bgKey: string,
      bgValue: string | number | boolean
    ): void => {
      dispatch(backgroundChangeAtt(bgKey, bgValue, bgSection));
    },
    []
  );

  return (
    <React.Fragment>
      <BackgroundColors
        changeBackgroundAtt={(bgKey, bgValue) =>
          changeBackgroundAtt("backgroundColor", bgKey, bgValue)
        }
        backgroundColor={background.backgroundColor}
      />

      <BackgroundParticles
        changeBackgroundAtt={(bgKey, bgValue) =>
          changeBackgroundAtt("particles", bgKey, bgValue)
        }
        particles={background.particles}
      />
    </React.Fragment>
  );
};

export default Background;
