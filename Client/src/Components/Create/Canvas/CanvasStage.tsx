import React from "react";
import { Transformer, Stage, Layer } from "react-konva";

interface Props {
  selected: any;
  deSelect: (event: any) => void;
  children: any;
}

const CanvasStage: React.FC<Props> = ({ selected, deSelect, children }) => {
  return (
    <Stage
      className={"canvas"}
      width={window.screen.width}
      height={3000}
      onMouseDown={(e) => deSelect(e)}
    >
      <Layer>
        {selected ? (
          <Transformer
            nodes={[selected]}
            rotateEnabled
            enabledAnchors={[
              "top-left",
              "top-right",
              "bottom-right",
              "bottom-left",
            ]}
          />
        ) : null}

        {children}
      </Layer>
    </Stage>
  );
};

export default React.memo(CanvasStage);
