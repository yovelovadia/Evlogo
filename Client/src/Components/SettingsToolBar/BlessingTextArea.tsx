import React from "react";
import { useDispatch } from "react-redux";

// The text area where u type the blessing

const BlessingTextArea: React.FC = () => {
  const dispatch: any = useDispatch();

  return (
    <textarea
      className={"blessingTextArea"}
      spellCheck={"false"}
      onChange={(event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        dispatch({ type: "PERAGRAPH_CHANGE", value: event.target.value });
      }}
      rows={10}
      cols={50}
    ></textarea>
  );
};

export default BlessingTextArea;
