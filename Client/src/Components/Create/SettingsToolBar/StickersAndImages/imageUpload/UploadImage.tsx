import React, { useState, useEffect } from "react";
import fetchData from "../../../../../customeFunctions/fetchData";
import { useDispatch } from "react-redux";
import { addImage } from "../../../../../redux/actions";
import LoadingIndicator from "../../../../Both/LoadingIndicator";

const UploadImage: React.FC = () => {
  const [image, setImage] = useState<any>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

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
      setLoading(false);
      setMessage(response.data.message);
      setImage(null);
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.error);
      } else {
        setMessage("Error occured");
      }
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
      setMessage(response.data.message);
      setImageUrl(null);
      setLoading(false);
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.error);
      } else {
        setMessage("Error occured");
      }
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <h1 className={"uploadTitle"}>Upload images</h1>
      {/* upload image */}
      <div className={"uploadImageSide"}>
        <div className="upload-btn-wrapper">
          <button>
            <h4>{image?.name ? image.name : "File"}</h4>
          </button>
          <input
            onChange={upload}
            type={"file"}
            name={"image"}
            accept={"image/*"}
          />
        </div>

        <input
          className={"uploadImageButton"}
          type={"button"}
          value={"upload"}
          onClick={submit}
          name={"image"}
        />
      </div>
      {/* add image by url */}
      <div className={"uploadImageSide"}>
        <input
          onChange={(data) => setImageUrl(data.target.value)}
          type={"url"}
          name={"image"}
          placeholder={"url"}
          className={"normalInput uploadNormalInput"}
        />
        <input
          className={"uploadImageButton"}
          type={"button"}
          value={"upload"}
          onClick={submitUrl}
          name={"image"}
        />
      </div>
      {loading ? <LoadingIndicator color={"black"} /> : <h1>{message}</h1>}
    </React.Fragment>
  );
};
export default UploadImage;
