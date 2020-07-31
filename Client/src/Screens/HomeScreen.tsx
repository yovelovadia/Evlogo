import React from "react";
import { MdTimer, MdShare, MdDesktopWindows } from "react-icons/md";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <React.Fragment>
      <div className={"homeImage"}>
        <header className={"navbar"}>
          <Link to={"/"}>
            <h1 className={"logo"}>EVLOGO</h1>
          </Link>
          <ul className={"links"}>
            <li>
              <a className={"homeLoginButton"} href={"login"}>
                LOG IN
              </a>
            </li>
            <li>
              <a href={"/signup"} className={"button1 homeAnimatedButton"}>
                <span>GET STARTED</span>
              </a>
            </li>
          </ul>
        </header>
        <div className={"titleContainer"}>
          <h1>Lorem ipsum dolor</h1>
          <h2>Evlogo gives u the tools to build an awesome blessing</h2>
        </div>
      </div>
      <h2 className={"title2"}>About</h2>
      <div className={"iconsContainer"}>
        <div className={"iconContainer"}>
          <MdTimer size={120} />
          <h3>Quick</h3>
          <h4>Create cool blessings in no time</h4>
        </div>
        <div className={"iconContainer"}>
          <MdDesktopWindows size={120} />

          <h3>Simple</h3>
          <h4>No learning curve just dive in and create!</h4>
        </div>
        <div className={"iconContainer"}>
          <MdShare size={120} />

          <h3>Easy share</h3>
          <h4>Get a link and share. Easy as that!</h4>
        </div>
      </div>
      <div className={"horizontalSapartorLine"}>
        <div />
        <img
          alt={"stag"}
          className={"stagImage"}
          src={require("../Assets/stagWaterColor.png")}
        />
      </div>
      {/* description Area */}
      <div className={"descriptionContainer"}>
        <h1>Various tools including uploading your own images!</h1>
        <div className={"doubleImageContainer"}>
          <img
            alt={"doubleImage"}
            className={"doubleImage"}
            src={require("../Assets/homeImage2.png")}
          />
          <img
            alt={"doubleImage"}
            className={"doubleImage doubleImagePosition2"}
            src={require("../Assets/homeImage1.png")}
          />
        </div>
      </div>
      <div className={"descriptionContainer descriptionContainerRed"}>
        <img
          alt={"image2"}
          className={"singleImage"}
          src={require("../Assets/homeImage3.png")}
        />
        <h1>Customizable animations and songs in the background.</h1>
      </div>
      <div className={"descriptionContainer "}>
        <h1>Create link and send to your loved ones! FREE OF CHARGE!</h1>

        <img
          alt={"image3"}
          className={"singleImage imageReverseShadow"}
          src={require("../Assets/homeImage4.png")}
        />
      </div>
      <a href={"/signup"} className={"button1 homeAnimatedButtonBottom"}>
        <span>GET STARTED</span>
      </a>
      <footer className={"footer"}>
        <h1>Created by Yovel</h1>
      </footer>
    </React.Fragment>
  );
};
export default HomeScreen;
