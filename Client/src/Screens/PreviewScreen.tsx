import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import Waves from "../Components/Create/Animations/Waves";
import Particles from "../Components/Create/Animations/Particles";
import fadeInAnimation from "../customeFunctions/fadeInAnimation";
import Typist from "react-typist";
import { ImageType, CanvasTypes, BackgroundType, Peragraph } from "../Types";
import { Link } from "react-router-dom";
import BackgroundColor from "../Components/Create/Animations/BackgroundColor";

const PreviewScreen: React.FC = () => {
  const data: CanvasTypes = useSelector((state) => state.canvasReducer);
  const images: { [key: string]: ImageType } = data.images;
  const background: BackgroundType = data.background;
  const peragraph: Peragraph = data.peragraph;
  const [start, setStart] = useState<boolean>(data.song ? false : true);
  const peragraphRef: any = useRef(null);
  const screenRef: any = useRef(null);

  useEffect(() => {
    fadeInAnimation();
  }, [start]);

  //makes the page to scroll automaticly based on text position /////// neeededededede workrkrkrk
  // useEffect(() => {
  //   let mounted = true;
  //   if (previewScreenRef.current && peragraphRef.current) {
  //     setInterval(() => {
  //       if (mounted) {
  //         previewScreenRef.current.scrollTo(0, 500);

  //         // previewScreenRef.current.scrollTo(0, 500);
  //       }
  //     }, 300);
  //   }
  //   return () => (mounted = false);
  // });

  return (
    <div ref={screenRef} className={"previewContainer"}>
      <BackgroundColor background={background.backgroundColor} />

      <Link to={"/create"}>
        <div style={{ position: "fixed", zIndex: 1 }} className={"button1"}>
          <span>Back</span>
        </div>
      </Link>

      {/* song in background */}
      <iframe
        onLoad={() => {
          setTimeout(() => {
            setStart(true);
          }, 3000);
        }}
        width={"0"}
        height={"0"}
        src={data.song}
        frameBorder={"0"}
        allow={"autoplay"}
        title={"song"}
      ></iframe>
      {/* will start only after song is loaded and starting to play */}

      {start ? (
        <React.Fragment>
          {background.particles.state ? (
            <Particles particles={background.particles} />
          ) : null}
          {background.particles.waves ? <Waves /> : null}
          {/* peragraph */}
          <Typist ref={peragraphRef} show={false} avgTypingDelay={100}>
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
          {console.log("nigger")}
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default PreviewScreen;
