import React, { useState } from "react";
import SongUI from "./SongUI";
import { songAdd } from "../../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { SongType } from "../../../../Types";

const Song: React.FC = () => {
  const dispatch = useDispatch();
  const song: string = useSelector((state) => state.canvasReducer.song);
  const [songDetails, setSongDetails] = useState<SongType>({
    url: null,
    start: "0",
  });

  const handleChange = (data: string | number, type: string): void => {
    setSongDetails({ ...songDetails, [type]: data });
  };

  const submit = (): void => {
    dispatch(songAdd(songDetails));
  };

  return (
    <React.Fragment>
      <SongUI onChange={handleChange} submit={submit} song={song} />
    </React.Fragment>
  );
};

export default Song;
