import React from "react";
import {
  MdImage,
  MdLinkedCamera,
  MdVolumeUp,
  MdSettings,
  MdEdit,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={"ToolsHeadersContainer"}>
      <Link to={"preview"}>
        <div className={"button1"}>
          <span>Preview</span>
        </div>
      </Link>
      <a href={"#Background"} className={"headerIcons"}>
        <MdImage size={35} color={"black"} />
        <div className={"headerIconsBubble"}>Background</div>
      </a>
      <a href={"#Text"} className={"headerIcons"}>
        <MdEdit size={35} color={"black"} />
        <div className={"headerIconsBubble"}>Peragraph</div>
      </a>

      <a href={"#Images"} className={"headerIcons"}>
        <MdLinkedCamera size={35} color={"black"} />
        <div className={"headerIconsBubble"}>Images</div>
      </a>

      <a href={"#Song"} className={"headerIcons"}>
        <MdVolumeUp size={35} color={"black"} />
        <div className={"headerIconsBubble"}>Song</div>
      </a>

      <a href={"#settings"} className={"headerIcons"}>
        <MdSettings size={35} color={"black"} />
        <div className={"headerIconsBubble"}>Settings</div>
      </a>
    </div>
  );
};

export default Header;
