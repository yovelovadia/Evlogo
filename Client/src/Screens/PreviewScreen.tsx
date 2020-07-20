import React from "react";
import { useSelector } from "react-redux";
import Typist from "react-typist";
import { ImageType, CanvasTypes, BackgroundType, Peragraph } from "../Types";

const PreviewScreen: React.FC = () => {
  const data: CanvasTypes = useSelector((state) => state.canvas);
  const images: { [key: string]: ImageType } = data.images;
  const background: BackgroundType = data.background;
  const peragraph: Peragraph = data.peragraph;

  return (
    <div
      className={"previewBackground"}
      style={{
        background: `linear-gradient(45deg,${background.color1},${
          background.color2 ? background.color2 : background.color1
        })`,
      }}
    >
      {/* song in background */}
      <iframe
        width={"0"}
        height={"0"}
        src={data.song}
        frameBorder={"0"}
        allow={"autoplay"}
        title={"song"}
      ></iframe>
      {/* all the images/stickers */}
      {Object.keys(images).map((item) => {
        const x: number = (images[item].x * 100) / window.outerWidth;
        const y: number = (images[item].y * 100) / window.outerHeight;
        const rotation: number = images[item].rotation;
        const scaleX: number = images[item].scaleX;
        return (
          <img
            draggable={false}
            alt={"somthing"}
            key={item}
            src={images[item].src}
            style={{
              transform: `scale(${scaleX}) rotate(${rotation}deg)`,
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              transformOrigin: "top left",
            }}
          />
        );
      })}
      {/* peragraph */}
      <Typist>
        <p
          style={{
            position: "absolute",
            whiteSpace: "pre-wrap",
            fontSize: `${peragraph.fontSize || 30}px`,
            top: `${(peragraph.y * 100) / window.outerHeight}%`,
            left: `${(peragraph.x * 100) / window.outerWidth}%`,
            textAlign: peragraph.textAlign as CanvasTextAlign,
          }}
        >
          {peragraph.text}
        </p>
      </Typist>
    </div>
  );
};

export default PreviewScreen;
