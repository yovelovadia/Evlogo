import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Peragraph } from "../../../../Types";
import {
  MdFormatAlignRight,
  MdFormatAlignLeft,
  MdFormatAlignCenter,
} from "react-icons/md";

const PeragraphToolBar: React.FC = () => {
  const dispatch: any = useDispatch();
  const peragraph: Peragraph = useSelector((state) => state.canvas.peragraph);
  const align: string = peragraph.textAlign;
  const fontSize: number = peragraph.fontSize;
  const color: string = peragraph.color;

  const changeTextAlign = (alignment: string): void => {
    const value: string = alignment;
    const key = "textAlign";
    dispatch({ type: "PERAGRAPH_CHANGE_ATT", value: { value, key } });
  };

  const changeFontSize = (data: any): void => {
    const value: string = data.target.value;
    const key: string = "fontSize";
    dispatch({ type: "PERAGRAPH_CHANGE_ATT", value: { value, key } });
  };

  const changeTextColor = (data: any): void => {
    const value: string = data.target.value;
    const key: string = "color";
    dispatch({ type: "PERAGRAPH_CHANGE_ATT", value: { value, key } });
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
              changeTextAlign("left");
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
              changeTextAlign("center");
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
              changeTextAlign("right");
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
        onChange={changeFontSize}
      />
      <input
        type={"color"}
        className={"colorPicker"}
        onChange={changeTextColor}
        value={color}
      />
      <select></select>
    </div>
  );
};
export default PeragraphToolBar;
