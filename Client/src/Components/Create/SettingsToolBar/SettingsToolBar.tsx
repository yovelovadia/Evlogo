import React, { useState, useEffect } from "react";
import ImageCarousel from "./Carousels/ImageCarousel";
import PeragraphTextArea from "./peragraphTextArea/PeragraphTextArea";
import UploadImage from "./UploadImage";
import SongPick from "./SongPick";
import Header from "./Header";
import Background from "./Background/Background";
import Finished from "./Finished";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";

// the settings bar container

const SettingsToolBar: React.FC = () => {
  const [refresh, setRefresh] = useState<boolean>(true);
  const [minimize, setMinimize] = useState<boolean>(false);

  return (
    <div className={"toolBar"} style={{ width: minimize ? "0px" : "30%" }}>
      <Header />
      <div id={"background"} className={"sectionContainer"}>
        <h1 className={"sectionContainerHeader"}>
          <span>Background</span>
        </h1>
        <Background />
      </div>

      <div id={"text"} className={"sectionContainer"}>
        <h1 className={"sectionContainerHeader"}>
          <span>Text</span>
        </h1>
        <PeragraphTextArea />
      </div>
      <div id={"images"} className={"sectionContainer"}>
        <h1 className={"sectionContainerHeader"}>
          <span>Stickers/Images</span>
        </h1>
        <h2>Stickers</h2>
        <ImageCarousel refresh={refresh} userImages={false} />
        <h2>Your images</h2>
        <ImageCarousel refresh={refresh} userImages={true} />
        <UploadImage refresh={() => setRefresh(!refresh)} />
      </div>
      <div id={"song"} className={"sectionContainer"}>
        <h1 className={"sectionContainerHeader"}>
          <span>Song</span>
        </h1>
        <SongPick />
      </div>

      <div
        onClick={() => {
          setMinimize(!minimize);
        }}
        className={"minimizeToolBar"}
        style={{ right: minimize ? "10px" : null }}
      >
        {minimize ? (
          <FiChevronsLeft size={35} />
        ) : (
          <FiChevronsRight size={35} />
        )}
      </div>
      <Finished />
    </div>
  );
};

export default SettingsToolBar;
