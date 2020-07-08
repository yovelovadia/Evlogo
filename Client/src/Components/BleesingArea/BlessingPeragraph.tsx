import React from "react";
import { useSelector } from "react-redux";

const BlessingPeragraph: React.FC = () => {
  const peragraph = useSelector((state) => state.blessingSettings.peragraph);
  return <p className={"blessingPeragraph"}>{peragraph}</p>;
};

export default BlessingPeragraph;
