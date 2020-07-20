import React, { useState } from "react";
import fetchData from "../../../customeFunctions/fetchData";

const UploadImage: React.FC<{ refresh: () => void }> = (props) => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const upload = (image: React.ChangeEvent<HTMLInputElement>): void => {
    const upload: File = image.target.files[0];
    setImage(upload);
  };

  const submit = async (): Promise<void> => {
    try {
      const data: FormData = new FormData();
      data.append("image", image);
      const response = await fetchData(
        "http://localhost:5000/assets/uploadImage",
        "post",
        data
      );
      setMessage(response.data.message);
      props.refresh();
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.error);
      }
    }
  };

  const submitUrl = async (): Promise<void> => {
    try {
      const response = await fetchData(
        "http://localhost:5000/assets/uploadUrlImage",
        "post",
        {
          imageUrl,
        }
      );
      setMessage(response.data.message);
      props.refresh();
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.error);
      }
    }
  };

  return (
    <div>
      {/* upload image */}
      <input
        style={{ margin: "40px" }}
        onChange={upload}
        type={"file"}
        name={"image"}
        accept={"image/*"}
      />
      <input
        className={"submitButton"}
        type={"button"}
        value={"upload"}
        onClick={submit}
        name={"image"}
      />
      {/* add image by url */}
      <input
        style={{ margin: "40px" }}
        onChange={(data) => setImageUrl(data.target.value)}
        type={"url"}
        name={"image"}
        placeholder={"url"}
      />
      <input
        className={"submitButton"}
        type={"button"}
        value={"upload"}
        onClick={submitUrl}
        name={"image"}
      />
      <h1>{message}</h1>
    </div>
  );
};
export default UploadImage;
