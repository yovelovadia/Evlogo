import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Typist from "react-typist";
import { ImageType, CanvasTypes, BackgroundType, Peragraph } from "../Types";
import fadeInAnimation from "../customeFunctions/fadeInAnimation";
import { Link } from "react-router-dom";

const PreviewScreen: React.FC = () => {
  const data: CanvasTypes = useSelector((state) => state.canvas);
  const images: { [key: string]: ImageType } = data.images;
  const background: BackgroundType = data.background;
  const peragraph: Peragraph = data.peragraph;

  useEffect(() => {
    fadeInAnimation();
  }, []);

  return (
    <div
      className={"previewBackground"}
      style={{
        background: `linear-gradient(${background.degree}deg,${
          background.color1
        },${background.color2 ? background.color2 : background.color1})`,
      }}
    >
      <Link to={"/create"}>
        <div
          style={{ position: "fixed", zIndex: 1 }}
          className={"coolAnimatedButton"}
        >
          <span>Back</span>
        </div>
      </Link>

      {/* peragraph */}
      <Typist>
        <p
          style={{
            position: "absolute",
            whiteSpace: "pre-wrap",
            fontFamily: `${peragraph.fontFamily}` || "sans-serif",
            fontSize: `${peragraph.fontSize || 30}px`,
            top: `${((peragraph.y + 18) * 100) / window.screen.height}%`, // plus 18 because of typist height is taking 18px so im doing the correction
            left: `${(peragraph.x * 100) / window.screen.width}%`,
            textAlign: peragraph.textAlign as CanvasTextAlign,
            color: peragraph.color,
            margin: "0",
            lineHeight: peragraph.lineHeight,
          }}
        >
          {peragraph.text}
        </p>
      </Typist>

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
        const x: number = (images[item].x * 100) / window.screen.width;
        const y: number = (images[item].y * 100) / window.innerHeight;
        const rotation: number = images[item].rotation;
        const precentageWidth: number = images[item].precentageWidth;
        return (
          <img
            draggable={false}
            alt={"somthing"}
            key={item}
            src={images[item].src}
            className={"fadeIn image"}
            style={{
              width: `${precentageWidth}%`,
              transform: `rotate(${rotation}deg)`,
              left: `${x}%`,
              top: `${y}%`,
            }}
          />
        );
      })}
    </div>
  );
};

export default PreviewScreen;
