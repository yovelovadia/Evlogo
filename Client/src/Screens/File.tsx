import React, { useState, useEffect } from "react";
import fetchData from "../customeFunctions/fetchData";
import { CanvasTypes } from "../Types";
import Typist from "react-typist";
import fadeInAnimation from "../customeFunctions/fadeInAnimation";

const File: React.FC = (props: any) => {
  const [canvas, setCanvas] = useState<CanvasTypes | null>(null);

  useEffect(() => {
    const getData = async (): Promise<any> => {
      const _id: string = props.match.params._id;
      const response: any = await fetchData(
        `http://localhost:5000/files/serve/${_id}`,
        "get"
      );
      setCanvas(response.data.canvas);
    };

    getData().then(fadeInAnimation);
  }, []);

  return (
    <React.Fragment>
      {canvas ? (
        <div
          className={"previewBackground"}
          style={{
            background: `linear-gradient(${canvas.background.degree}deg,${
              canvas.background.color1
            },${
              canvas.background.color2
                ? canvas.background.color2
                : canvas.background.color1
            })`,
          }}
        >
          {/* peragraph */}
          <Typist>
            <p
              style={{
                position: "absolute",
                whiteSpace: "pre-wrap",
                fontFamily: `${canvas.peragraph.fontFamily}` || "sans-serif",
                fontSize: `${canvas.peragraph.fontSize || 30}px`,
                top: `${
                  ((canvas.peragraph.y + 18) * 100) / window.screen.height
                }%`, // plus 18 because of typist height is taking 18px so im doing the correction
                left: `${(canvas.peragraph.x * 100) / window.screen.width}%`,
                textAlign: canvas.peragraph.textAlign as CanvasTextAlign,
                color: canvas.peragraph.color,
                margin: "0",
                lineHeight: canvas.peragraph.lineHeight,
              }}
            >
              {canvas.peragraph.text}
            </p>
          </Typist>

          {/* song in background */}
          <iframe
            width={"0"}
            height={"0"}
            src={canvas.song}
            frameBorder={"0"}
            allow={"autoplay"}
            title={"song"}
          ></iframe>
          {/* all the images/stickers */}
          {canvas.images
            ? Object.keys(canvas.images).map((item) => {
                const x: number =
                  (canvas.images[item].x * 100) / window.screen.width;
                const y: number =
                  (canvas.images[item].y * 100) / window.innerHeight;
                const rotation: number = canvas.images[item].rotation;
                const precentageWidth: number =
                  canvas.images[item].precentageWidth;
                return (
                  <img
                    draggable={false}
                    alt={"somthing"}
                    key={item}
                    src={canvas.images[item].src}
                    className={"fadeIn image"}
                    style={{
                      width: `${precentageWidth}%`,
                      transform: `rotate(${rotation}deg)`,
                      left: `${x}%`,
                      top: `${y}%`,
                    }}
                  />
                );
              })
            : null}
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default File;
