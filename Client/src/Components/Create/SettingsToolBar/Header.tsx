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
        <div className={"headerPreviewButton"}>
          <span>Preview</span>
        </div>
      </Link>
      <a href={"#images"} className={"headerIcons"}>
        <MdLinkedCamera size={40} color={"black"} />
        <div className={"headerIconsBubble"}>Images</div>
      </a>

      <a href={"#song"} className={"headerIcons"}>
        <MdVolumeUp size={40} color={"black"} />
        <div className={"headerIconsBubble"}>Song</div>
      </a>
      <a href={"#okey"} className={"headerIcons"}>
        <MdImage size={40} color={"black"} />
        <div className={"headerIconsBubble"}>Background</div>
      </a>
      <a href={"#okey"} className={"headerIcons"}>
        <MdSettings size={40} color={"black"} />
        <div className={"headerIconsBubble"}>Settings</div>
      </a>
      <a href={"#text"} className={"headerIcons"}>
        <MdEdit size={40} color={"black"} />
        <div className={"headerIconsBubble"}>Peragraph</div>
      </a>
    </div>
  );
};

export default Header;
