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
    const value: string = data.target.value;
    const key = "text";
    dispatch({ type: "PERAGRAPH_CHANGE_ATT", value: { value, key } });
  };

  return (
    <div>
      <textarea
        style={{ textAlign: align as CanvasTextAlign }}
        className={"blessingTextArea"}
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
