import React, { useState } from "react";
import fetchData from "../../../../../customeFunctions/fetchData";
import UploadImageUI from "./UploadImageUI";

type fetchToState = {
  fetchToState: (url: string, isUserImages: boolean) => Promise<any>;
};

const UploadImage: React.FC<fetchToState> = ({ fetchToState }) => {
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const cleanUp = (response) => {
    setLoading(false);
    setMessage(response.data.message);
    setImage(null);
    fetchToState("http://localhost:5000/Assets/getUserImages", true);
  };

  const upload = (image: React.ChangeEvent<HTMLInputElement>): void => {
    const upload: File = image.target.files[0];
    setImage(upload);
  };

  const submit = async (): Promise<void> => {
    setLoading(true);
    try {
      const data: FormData = new FormData();
      data.append("image", image);
      const response: any = await fetchData(
        "http://localhost:5000/assets/uploadImage",
        "post",
        data
      );
      cleanUp(response);
    } catch (err) {
      setMessage("Error occured");
      setLoading(false);
    }
  };

  //upload by url link
  const submitUrl = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await fetchData(
        "http://localhost:5000/assets/uploadUrlImage",
        "post",
        {
          imageUrl,
        }
      );
      cleanUp(response);
    } catch (err) {
      setMessage("Error occured");
      setLoading(false);
    }
  };

  return (
    <UploadImageUI
      upload={upload}
      submit={submit}
      image={image}
      setImageUrl={(data) => setImageUrl(data)}
      imageUrl={imageUrl}
      submitUrl={submitUrl}
      message={message}
      loading={loading}
    />
  );
};

export default UploadImage;
