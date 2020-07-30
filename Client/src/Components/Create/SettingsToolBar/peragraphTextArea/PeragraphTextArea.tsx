import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Peragraph } from "../../../../Types";
import PeragraphToolBar from "./PeragraphToolBar";
import { peragraphChangeAtt } from "../../../../redux/actions";

// The text area where u type the blessing

const PeragraphTextArea: React.FC = () => {
  const dispatch: any = useDispatch();
  const data: Peragraph = useSelector(
    (state) => state.canvasReducer.peragraph.text
  );
  const text: string = data.text;
  const align: string = data.textAlign;

  const peragraphTextChange = (data: any): void => {
    const peraValue: string = data.target.value;
    const peraKey: string = "text";
    dispatch(peragraphChangeAtt(peraValue, peraKey));
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

export default React.memo(PeragraphTextArea);
