import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { songUrl } from "../../../redux/actions";

const SongPick = () => {
  const dispatch: any = useDispatch();
  const [song, setSong] = useState<{
    url: string;
    timeStart: string | undefined;
  }>({ url: "", timeStart: undefined });
  const [message, setMessage] = useState<string>("");

  return (
    <div className={"songContainer"}>
      <input
        className={"textInput1"}
        type={"url"}
        value={song.url}
        name={"Youtube url"}
        placeholder={"Youtube Link"}
        onChange={(data) => {
          setSong({ ...song, url: data.target.value });
        }}
      />

      <input
        className={"textInput1"}
        type={"text"}
        value={song.timeStart}
        onChange={(data) => setSong({ ...song, timeStart: data.target.value })}
        placeholder={"time start (by seconds)"}
      />

      <input
        className={"button2"}
        type={"button"}
        value={"Pick song"}
        onClick={() => {
          dispatch(songUrl(song));
          setMessage("Song picked");
        }}
      />
      <h1>{message}</h1>
    </div>
  );
};

export default SongPick;
