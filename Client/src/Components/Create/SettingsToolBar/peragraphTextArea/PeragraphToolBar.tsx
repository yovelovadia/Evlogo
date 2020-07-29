import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Peragraph } from "../../../../Types";
import FontSelector from "./FontsSelector";
import {
  MdFormatAlignRight,
  MdFormatAlignLeft,
  MdFormatAlignCenter,
} from "react-icons/md";
import { peragraphChangeAtt } from "../../../../redux/actions";

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

  // for each change will disptetch on redux- need to give a key value and a value
  const changeAtt = (peraValue: string | number, peraKey: string): void => {
    dispatch(peragraphChangeAtt(peraValue, peraKey));
  };

  return (
    <React.Fragment>
      <div className={"peragraphToolBarContainer"}>
        <div className={"textAlignContainer"}>
          <div>
            <input // align text left
              className={"textAlignRadio"}
              type={"radio"}
              name={"textAlign"}
              onChange={() => {
                changeAtt("left", "textAlign");
              }}
            />
            <MdFormatAlignLeft
              size={25}
              style={{ opacity: align === "left" ? "1" : "0.4" }}
            />
          </div>
          <div>
            <input // align text center
              className={"textAlignRadio"}
              type={"radio"}
              name={"textAlign"}
              onChange={() => {
                changeAtt("center", "textAlign");
              }}
              checked={align === "center" ? true : false}
            />
            <MdFormatAlignCenter
              size={25}
              style={{ opacity: align === "center" ? "1" : "0.4" }}
            />
          </div>
          <div>
            <input // align text right
              className={"textAlignRadio"}
              type={"radio"}
              name={"textAlign"}
              onChange={() => {
                changeAtt("right", "textAlign");
              }}
              checked={align === "right" ? true : false}
            />
            <MdFormatAlignRight
              size={25}
              style={{ opacity: align === "right" ? "1" : "0.4" }}
            />
          </div>
        </div>

        <input //text color
          type={"color"}
          className={"colorPicker"}
          onChange={(data) => {
            changeAtt(data.target.value, "color");
          }}
          value={color}
        />
        <FontSelector
          changeAtt={(value, attName) => changeAtt(value, attName)}
          fontFamily={fontFamily}
        />
      </div>
      <div className={"numbersInputContainer"}>
        <input
          type={"number"}
          className={"fontSizeInput"}
          min={0}
          max={200}
          value={fontSize}
          onChange={(data) =>
            changeAtt(parseInt(data.target.value), "fontSize")
          }
        />
        <h3>Font size</h3>
      </div>
      <div className={"numbersInputContainer"}>
        <input
          value={lineHeight}
          className={"fontSizeInput"}
          type={"number"}
          step={"0.1"}
          onChange={(data) =>
            changeAtt(parseFloat(data.target.value), "lineHeight")
          }
        />
        <h3>Line space</h3>
      </div>
      <h3>Text can be moved by dragging</h3>
    </React.Fragment>
  );
};
export default PeragraphToolBar;
