import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Peragraph } from "../../../../Types";
import {
  MdFormatAlignRight,
  MdFormatAlignLeft,
  MdFormatAlignCenter,
} from "react-icons/md";

const fonts: string[] = [
  "Ariel",
  "cursive",
  "sans-serif",
  "Amatic SC",
  "Anton",
  "Caveat",
  "Chewy",
  "Courgette",
  "Cousine",
  "Dancing Script",
  "Modak",
  "Permanent Marker",
  "Ranchers",
  "Rubik",
  "Secular One",
  "Suez One",
  "Indie Flower",
  "Farsan",
  "Saira Condensed",
];

const PeragraphToolBar: React.FC = () => {
  const dispatch: any = useDispatch();
  const peragraph: Peragraph = useSelector(
    (state) => state.canvasReducer.peragraph
  );
  const align: string = peragraph.textAlign;
  const fontSize: number = peragraph.fontSize;
  const color: string = peragraph.color;
  const fontFamily: string = peragraph.fontFamily;
  const lineHeight: number = peragraph.lineHeight;

  const changeAtt = (peraKey: string, peraValue: string | number): void => {
    dispatch({ type: "PERAGRAPH_CHANGE_ATT", value: { peraValue, peraKey } });
  };

  return (
    <div className={"peragraphToolBarContainer"}>
      <div className={"textAlignContainer"}>
        <div>
          <input
            className={"textAlignRadio"}
            type={"radio"}
            name={"textAlign"}
            onChange={() => {
              changeAtt("textAlign", "left");
            }}
          />
          <MdFormatAlignLeft
            size={25}
            style={{ opacity: align === "left" ? "1" : "0.4" }}
          />
        </div>
        <div>
          <input
            className={"textAlignRadio"}
            type={"radio"}
            name={"textAlign"}
            onChange={() => {
              changeAtt("textAlign", "center");
            }}
            checked={align === "center" ? true : false}
          />
          <MdFormatAlignCenter
            size={25}
            style={{ opacity: align === "center" ? "1" : "0.4" }}
          />
        </div>
        <div>
          <input
            className={"textAlignRadio"}
            type={"radio"}
            name={"textAlign"}
            onChange={() => {
              changeAtt("textAlign", "right");
            }}
            checked={align === "right" ? true : false}
          />
          <MdFormatAlignRight
            size={25}
            style={{ opacity: align === "right" ? "1" : "0.4" }}
          />
        </div>
      </div>
      <input
        type={"number"}
        className={"fontSizeInput"}
        min={0}
        max={200}
        value={fontSize}
        onChange={(data) => changeAtt("fontSize", parseInt(data.target.value))}
      />
      <input
        type={"color"}
        className={"colorPicker"}
        onChange={(data) => {
          changeAtt("color", data.target.value);
        }}
        value={color}
      />
      <select
        value={fontFamily}
        onChange={(data) => changeAtt("fontFamily", data.target.value)}
      >
        {fonts.map((font) => (
          <option key={font} style={{ fontFamily: font }} value={font}>
            {font}
          </option>
        ))}
      </select>
      <input
        value={lineHeight}
        className={"fontSizeInput"}
        type={"number"}
        step={"0.1"}
        onChange={(data) =>
          changeAtt("lineHeight", parseFloat(data.target.value))
        }
      />
    </div>
  );
};
export default PeragraphToolBar;
