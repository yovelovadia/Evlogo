import React from "react";
import ImageCarousel from "./Carousels/ImageCarousel";
import BlessingTextArea from "./BlessingTextArea";
import UploadImage from "./UploadImage";
import SongPick from "./SongPick";
import Header from "./Header";
import { Link } from "react-router-dom";

// the settings bar container

const SettingsToolBar: React.FC = () => {
  return (
    <div className={"toolBar"}>
      <Header />
      <ImageCarousel userImages={false} />
      <ImageCarousel userImages={true} />
      <UploadImage />
      <BlessingTextArea />
      <SongPick />

      <Link to={"preview"}>
        <h1>Click me to for preview</h1>
      </Link>
      <h1 style={{ marginBottom: "1000px" }}>test</h1>
      <h1 id={"okey"}>nigger</h1>
      {/* <h3 className={"toolsHeaders"}>Pick stickers/images</h3>
      <BackGroundCarousel /> */}
    </div>
  );
};

export default SettingsToolBar;
