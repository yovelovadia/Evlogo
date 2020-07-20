import React from "react";
import SettingsToolBar from "../Components/Create/SettingsToolBar/SettingsToolBar";
import Canvas from "../Components/Create/Canvas/Canvas";

const CreateScreen: React.FC = () => {
  return (
    <div className={"pageContainer"}>
      <SettingsToolBar />
      <Canvas />
    </div>
  );
};

export default CreateScreen;
