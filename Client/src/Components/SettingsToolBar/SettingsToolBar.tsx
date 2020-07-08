import React from "react";
import ImageCarousel from "./Carousels/ImageCarousel";
import BlessingTextArea from "./BlessingTextArea";
import { Link } from "react-router-dom";

// the settings bar container

const SettingsToolBar: React.FC = () => {
  return (
    <div className={"toolBar"}>
      <h3 className={"toolsHeaders"}>images/stickers</h3>
      <ImageCarousel />
      <BlessingTextArea />

      <Link to={"preview"}>
        <h1>Click me to for preview</h1>
      </Link>

      {/* <h3 className={"toolsHeaders"}>Pick stickers/images</h3>
      <BackGroundCarousel /> */}
    </div>
  );
};

export default SettingsToolBar;
