import React, { useState } from "react";
import PeragraphTextArea from "./peragraphTextArea/PeragraphTextArea";
import SongPick from "./SongPick";
import Header from "./Header";
import Background from "./Background/Background";
import Finished from "./Finished";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
import StickersAndImages from "./StickersAndImages/StickersAndImages";

// the settings bar container

const SettingsToolBar: React.FC = () => {
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
        <StickersAndImages />
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
