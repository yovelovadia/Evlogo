import React from "react";
import { ParticlesType } from "../../../Types";

const Particles: React.FC<{ particles: ParticlesType }> = ({ particles }) => {
  const snowList: number[] = [];
  for (let i = 0; i < particles.count; i++) {
    snowList.push(i);
  }

  return (
    <div>
      {snowList.map((item) => (
        <div
          style={{
            background: particles.color,
            width: `${particles.size}px`,
            height: `${particles.size}px`,
          }}
          key={item}
          className={`particles ${particles.type}`}
        />
      ))}
    </div>
  );
};

export default React.memo(Particles);
