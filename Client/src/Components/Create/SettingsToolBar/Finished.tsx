import React, { useState } from "react";
import { CanvasTypes } from "../../../Types";
import fetchData from "../../../customeFunctions/fetchData";
import LoadingIndicator from "../../Both/LoadingIndicator";
import { useSelector } from "react-redux";

const Finished: React.FC = () => {
  const canvas: CanvasTypes = useSelector((state) => state.canvasReducer);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<{
    message: string;
    link: string;
  } | null>(null);

  const create = async (): Promise<any> => {
    setLoading(true);
    const response = await fetchData(
      "http://localhost:5000/files/create",
      "post",
      { canvas }
    );
    setMessage({ message: response.data.message, link: response.data.link });
    setLoading(false);
  };

  return (
    <div className={"finished"} id={"settings"}>
      {message ? (
        <div>
          <h3 className={"finishedMessage"}>{message.message}</h3>
          <a className={"finishedLink"} href={message.link}>
            {message.link}
          </a>
        </div>
      ) : (
        <input
          className={"createLink"}
          type={"button"}
          value={"Create Link"}
          onClick={create}
        />
      )}

      {loading ? <LoadingIndicator color={"white"} /> : null}
    </div>
  );
};

export default Finished;
