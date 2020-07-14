import React from "react";
import { useSelector } from "react-redux";
import Typist from "react-typist";

const PreviewScreen: React.FC = () => {
  const images: any[] = useSelector((state) => state.blessingSettings.images);
  const data: any = useSelector((state) => state.blessingSettings);

  return (
    <div className={"previewContainer"}>
      <iframe
        width={"0"}
        height={"0"}
        src={data.song}
        frameBorder={"0"}
        allow={"autoplay"}
      ></iframe>
      {Object.keys(images).map((item) => (
        <img
          draggable={false}
          key={item}
          src={images[item].imageSrc}
          style={{
            left: `${images[item].position.xPosition}%`,
            top: `${images[item].position.yPosition}%`,
          }}
          className={"previewImages"}
        />
      ))}
      <Typist>
        <p className={"blessingPeragraph"}>{data.peragraph}</p>
      </Typist>
    </div>
  );
};

export default PreviewScreen;
