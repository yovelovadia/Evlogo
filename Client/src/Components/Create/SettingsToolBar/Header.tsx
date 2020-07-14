import React from "react";
import { MdImage, MdLinkedCamera, MdVolumeUp } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <a href={"#"}>
        <MdLinkedCamera size={40} color={"black"} />
      </a>
      <a href={"#"} className={"test"}>
        <MdVolumeUp size={40} color={"black"} />
      </a>
      <a href={"#okey"} className={"test"}>
        <MdImage size={40} color={"black"} />
      </a>
    </div>
  );
};

export default Header;
