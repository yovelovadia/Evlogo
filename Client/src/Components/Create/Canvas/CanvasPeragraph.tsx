import React, { useState } from "react";
import { Text } from "react-konva";
import { PeragraphProps } from "../../../Types";

const CanvasPeragraph: React.FC<PeragraphProps> = ({
  peragraph,
  selected,
  dispatch,
}) => {
  const [color, setColor] = useState(peragraph.color);

  const storeCordInRedux = (data: any): void => {
    const x: number = data.currentTarget.attrs.x;
    const y: number = data.currentTarget.attrs.y;
    const peraCord: { x: number; y: number } = { x, y };

    dispatch({ type: "PERAGRAPH_CORD", value: peraCord });
  };

  return (
    <Text
      text={peragraph.text}
      draggable
      fontSize={peragraph.fontSize}
      fontFamily={peragraph.fontFamily || "Ariel"}
      align={peragraph.textAlign}
      x={peragraph.x || 100}
      y={peragraph.y || 100}
      onDragMove={() => setColor("green")}
      onDragEnd={(data) => {
        setColor(peragraph.color || "black");
        storeCordInRedux(data);
      }}
      fill={peragraph.color}
    />
  );
};

export default CanvasPeragraph;
