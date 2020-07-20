import React, { useState } from "react";
import { useDispatch } from "react-redux";

const SongPick = () => {
  const [song, setSong] = useState<{ url: string; timeStart: string }>({
    url: "",
    timeStart: "0",
  });
  const dispatch: any = useDispatch();
  return (
    <div>
      <input
        type={"text"}
        value={song.url}
        name={"Youtube url"}
        placeholder={"Youtube Link"}
        onChange={(data) => {
          setSong({ ...song, url: data.target.value });
        }}
      />

      <input
        type={"text"}
        value={song.timeStart}
        onChange={(data) => setSong({ ...song, timeStart: data.target.value })}
        placeholder={"time start (by seconds)"}
      />

      <input
        className={"submitButton"}
        type={"button"}
        value={"submit"}
        onClick={() => dispatch({ type: "SONG_ADD_URL", value: song })}
      />
    </div>
  );
};

export default SongPick;
