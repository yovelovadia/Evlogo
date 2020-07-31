import React from "react";
import Slider from "./Slider";
import ColorPicker from "./ColorPicker";
import { ParticlesType } from "../../../../Types";

export interface Props {
  particles: ParticlesType;
  changeBackgroundAtt: (
    bgColorKey: string,
    bgColorValue: string | number | boolean
  ) => void;
}

const BackgroundParticles: React.SFC<Props> = ({
  particles,
  changeBackgroundAtt,
}) => {
  return (
    <React.Fragment>
      <input // temporary position
        checked={particles.waves}
        type={"checkbox"}
        onChange={() => changeBackgroundAtt("waves", !particles.waves)}
      />
      <h3>Waves?</h3>

      <input
        checked={particles.state}
        type={"checkbox"}
        onChange={() => changeBackgroundAtt("state", !particles.state)}
      />
      <h3>Particles?</h3>

      {particles.state ? (
        <React.Fragment>
          <Slider
            max={150}
            attName={"count"}
            value={particles.count}
            changeBgAtt={changeBackgroundAtt}
          />
          <Slider
            max={200}
            attName={"size"}
            value={particles.size}
            changeBgAtt={changeBackgroundAtt}
          />
          <ColorPicker
            name={"color"}
            onChange={changeBackgroundAtt}
            value={particles.color}
          />
          <input
            checked={particles.type === "snow"}
            type={"radio"}
            name={"type"}
            onClick={() => changeBackgroundAtt("type", "snow")}
          />
          <h3>Circle</h3>
          <input
            checked={particles.type === "squere"}
            type={"radio"}
            name={"type"}
            onClick={() => changeBackgroundAtt("type", "squere")}
          />
          <h3>Squere</h3>
          <input
            checked={particles.type === "heart"}
            name={"type"}
            type={"radio"}
            onClick={() => changeBackgroundAtt("type", "heart")}
          />
          <h3>Heart</h3>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default React.memo(
  BackgroundParticles,
  (prev, next) => prev.particles === next.particles
);
