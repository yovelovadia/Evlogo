import React, { useState } from "react";
import { Text } from "react-konva";
import { PeragraphProps } from "../../../Types";

const CanvasPeragraph: React.FC<PeragraphProps> = ({ peragraph, dispatch }) => {
  const storeCordInRedux = (data: any): void => {
    const x: number = data.currentTarget.attrs.x;
    const y: number = data.currentTarget.attrs.y;
    const peraCord: { x: number; y: number } = { x, y };

    dispatch({ type: "PERAGRAPH_CORD", value: peraCord });
  };

  return (
    <Text
      lineHeight={peragraph.lineHeight}
      text={peragraph.text}
      draggable
      fontSize={peragraph.fontSize}
      fontFamily={peragraph.fontFamily || "sans-serif"}
      align={peragraph.textAlign}
      x={peragraph.x}
      y={peragraph.y}
      onDragEnd={(data) => {
        storeCordInRedux(data);
      }}
      fill={peragraph.color}
    />
  );
};

export default CanvasPeragraph;
