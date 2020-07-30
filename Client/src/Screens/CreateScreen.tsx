import React from "react";
import SettingsToolBar from "../Components/Create/SettingsToolBar/SettingsToolBar";
import Display from "../Components/Create/Canvas/Display";
import { useSelector } from "react-redux";

const CreateScreen: React.FC = () => {
  return (
    <div className={"pageContainer"} id={"pageContainer"}>
      <SettingsToolBar />
      <Display />
    </div>
  );
};

export default CreateScreen;
