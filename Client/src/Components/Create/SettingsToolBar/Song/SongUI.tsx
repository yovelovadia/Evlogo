import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { songAdd } from "../../../../redux/actions";
import { SongType } from "../../../../Types";

export interface Props {
  song: string | undefined;
  onChange: (data: string, type: string) => void;
  submit: () => void;
}

const SongUI: React.FC<Props> = ({ onChange, submit, song }) => {
  return (
    <>
      <div className={"songContainer"}>
        <input
          className={"textInput1"}
          type={"url"}
          name={"Youtube url"}
          placeholder={"Youtube Link"}
          onChange={(data) => {
            onChange(data.target.value, "url");
          }}
        />

        <input
          className={"textInput1"}
          type={"text"}
          onChange={(data) => onChange(data.target.value, "start")}
          placeholder={"time start (by seconds)"}
        />

        <input
          className={"button2"}
          type={"button"}
          value={"Pick song"}
          onClick={submit}
        />
      </div>
      {song ? (
        <div className={"songVideoContainer"}>
          <h1>Song picked</h1>
          <h1 className={"songError"}>Error with the link check again</h1>
          <iframe
            width={"100%"}
            height={"100%"}
            src={song}
            frameBorder={"0"}
            title={"song"}
          ></iframe>
        </div>
      ) : null}
    </>
  );
};

export default SongUI;
