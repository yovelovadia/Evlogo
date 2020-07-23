import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Peragraph } from "../../../../Types";
import PeragraphToolBar from "./PeragraphToolBar";

// The text area where u type the blessing

const PeragraphTextArea: React.FC = () => {
  const dispatch: any = useDispatch();
  const data: Peragraph = useSelector((state) => state.canvas.peragraph);
  const text: string = data.text;
  const align: string = data.textAlign;

  const peragraphTextChange = (data: any): void => {
    const peraValue: string = data.target.value;
    const peraKey = "text";
    dispatch({ type: "PERAGRAPH_CHANGE_ATT", value: { peraValue, peraKey } });
  };

  return (
    <div>
      <textarea
        style={{ textAlign: align as CanvasTextAlign }}
        className={"peragraphTextArea"}
        spellCheck={"false"}
        onChange={peragraphTextChange}
        rows={10}
        cols={50}
        value={text}
      ></textarea>
      <PeragraphToolBar />
    </div>
  );
};

export default PeragraphTextArea;
