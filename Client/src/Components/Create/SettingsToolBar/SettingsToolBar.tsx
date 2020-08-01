import React, { useState } from "react";
import { CanvasTypes } from "../../../Types";
import PeragraphTextArea from "./peragraphTextArea/PeragraphTextArea";
import Song from "./Song/Song";
import Header from "./Header";
import Background from "./Background/Background";
import Finished from "./Finished";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
import StickersAndImages from "./StickersAndImages/StickersAndImages";
import SectionContainer from "../../ReusableComponents/SectionContainer";

// the settings bar container

const SettingsToolBar: React.FC = () => {
  const [minimize, setMinimize] = useState<boolean>(false);

  return (
    <div className={"toolBar"} style={{ width: minimize ? "0px" : "30%" }}>
      <Header />
      <SectionContainer id={"Background"}>
        <Background />
      </SectionContainer>

      <SectionContainer id={"Text"}>
        <PeragraphTextArea />
      </SectionContainer>

      <SectionContainer id={"Images"}>
        <StickersAndImages />
      </SectionContainer>

      <SectionContainer id={"Song"}>
        <Song />
      </SectionContainer>

      <Finished />

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
    </div>
  );
};

export default SettingsToolBar;
