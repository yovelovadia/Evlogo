import React from "react";
import { MdTimer, MdShare, MdDesktopWindows } from "react-icons/md";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <React.Fragment>
      <div className={"homeImage"}>
        <header className={"navbar"}>
          <Link to={"/"}>
            <h1 className={"logo"}> EVLOGO</h1>
          </Link>
          <ul className={"links"}>
            <li>
              <a className={"homeLoginButton"} href={"login"}>
                LOG IN
              </a>
            </li>
            <li>
              <a
                href={"/signup"}
                className={"coolAnimatedButton homeAnimatedButton"}
              >
                <span>GET STARTED</span>
              </a>
            </li>
          </ul>
        </header>
        <div className={"titleContainer"}>
          <h1 className={"title"}>Where dreams come true</h1>
          <h5 className={"subTitle"}>
            Evlogo gives u the tools to build an awesome blessing
          </h5>
        </div>
      </div>
      <h2 className={"title2"}>About</h2>
      <div className={"iconsContainer"}>
        <div className={"iconContainer"}>
          <MdTimer size={120} />
          <h3 className={"iconHeader"}>Quick</h3>
          <h4 className={"iconPeragraph"}>Create cool blessings in no time</h4>
        </div>
        <div className={"iconContainer"}>
          <MdDesktopWindows size={120} />

          <h3 className={"iconHeader"}>Simple</h3>
          <h4 className={"iconPeragraph"}>
            No learning curve just dive in and create!
          </h4>
        </div>
        <div className={"iconContainer"}>
          <MdShare size={120} />

          <h3 className={"iconHeader"}>Easy share</h3>
          <h4 className={"iconPeragraph"}>
            Get a link and share. Easy as that!
          </h4>
        </div>
      </div>
    </React.Fragment>
  );
};
export default HomeScreen;
