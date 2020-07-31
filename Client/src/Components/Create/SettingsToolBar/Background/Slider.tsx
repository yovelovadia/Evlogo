import React from "react";

interface Props {
  value: string | number;
  attName: string;
  max: number;
  changeBgAtt: (attName: string, value: string | number) => void;
}

const Slider: React.FC<Props> = ({ value, attName, max, changeBgAtt }) => {
  return (
    <div className={"sliderContainer"}>
      <h3>{value + " " + attName}</h3>
      <input
        type={"range"}
        className={"slider"}
        min={0}
        max={max}
        value={value}
        onChange={(data) => changeBgAtt(attName, data.target.value)}
      />
    </div>
  );
};

export default React.memo(Slider, (prev, next) => prev.value === next.value);
