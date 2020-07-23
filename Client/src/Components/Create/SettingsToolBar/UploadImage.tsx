import React, { useState, useEffect } from "react";
import fetchData from "../../../customeFunctions/fetchData";
import { useDispatch } from "react-redux";

const UploadImage: React.FC<{ refresh: () => void }> = (props) => {
  const dispatch = useDispatch();
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
      setImage(null);
      props.refresh();
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.error);
      }
    }
  };
  //uploading files by dragging on screen and placing them
  const uploadByDrag = async (droppedImage): Promise<void> => {
    try {
      const data: FormData = new FormData();
      data.append("image", droppedImage);
      const response = await fetchData(
        "http://localhost:5000/assets/uploadImage",
        "post",
        data
      );
      const link: string = response.data.link;
      dispatch({ type: "IMAGE_ADD", value: `http://localhost:5000/${link}` });
      props.refresh();
    } catch (err) {
      if (err.response) {
        const link: string = err.response.data.link;
        dispatch({ type: "IMAGE_ADD", value: `http://localhost:5000/${link}` });
        props.refresh();
      }
    }
  };
  //uploading files by dragging on screen
  useEffect(() => {
    const pageContainer = document.getElementById("pageContainer");
    pageContainer.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
    pageContainer.addEventListener("drop", (event) => {
      event.preventDefault();
      event.stopPropagation();
      uploadByDrag(event.dataTransfer.files[0]);
    });
    pageContainer.addEventListener("dragleave", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
  });

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
      <h1>{message}</h1>
    </React.Fragment>
  );
};
export default UploadImage;
