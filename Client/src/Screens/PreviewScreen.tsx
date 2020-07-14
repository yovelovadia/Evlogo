import React from "react";
import { useSelector } from "react-redux";
import Typist from "react-typist";

const PreviewScreen: React.FC = () => {
  const images: any[] = useSelector((state) => state.blessingSettings.images);
  const peragraph: string = useSelector(
    (state: { blessingSettings: { peragraph: string } }) =>
      state.blessingSettings.peragraph
  );

  return (
    <div className={"previewContainer"}>
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
        <p className={"blessingPeragraph"}>{peragraph}</p>
      </Typist>
    </div>
  );
};

export default PreviewScreen;
