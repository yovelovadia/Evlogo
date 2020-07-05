import React from "react";
import BackGroundCarousel from "./BackGroundCarousel";
import {Props} from "../../Types"

const SettingsToolBar: React.FC<Props> = (props) => {
  return (
    <div className={"toolBar"}>
      <h3 className={"toolsHeaders"}>Pick background</h3>
      <BackGroundCarousel addImage={props.addImage} />

      {/* <h3 className={"toolsHeaders"}>Pick stickers/images</h3>
      <BackGroundCarousel /> */}
    </div>
  );
};

export default SettingsToolBar;
