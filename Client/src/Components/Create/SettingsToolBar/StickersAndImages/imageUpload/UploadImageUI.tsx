import React from "react";
import LoadingIndicator from "../../../../ReusableComponents/LoadingIndicator";

interface Props {
  image: File | null;
  loading: boolean;
  message: string;
  imageUrl: string;
  submit: () => Promise<void>;
  upload: (image: React.ChangeEvent<HTMLInputElement>) => void;
  setImageUrl: (data: string) => void;
  submitUrl: () => Promise<void>;
}

const UploadImageUI: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <h1 className={"uploadTitle"}>Upload images</h1>
      {/* upload image */}
      <div className={"uploadContainer"}>
        <div className="upload-btn-wrapper">
          <input
            type={"text"}
            name={"image"}
            placeholder={"File"}
            defaultValue={props.image?.name || ""}
            className={"normalInput fileInput"}
          />
          <input
            onChange={props.upload}
            type={"file"}
            name={"image"}
            accept={"image/*"}
          />
        </div>
        <input
          className={"uploadImageButton"}
          type={"button"}
          value={"upload"}
          onClick={props.submit}
          name={"image"}
        />
      </div>

      {/* upload by url */}

      <div className={"uploadContainer"}>
        <input
          onChange={(data) => props.setImageUrl(data.target.value)}
          type={"url"}
          name={"image"}
          placeholder={"url"}
          className={"normalInput"}
          defaultValue={props.imageUrl}
        />

        <input
          className={"uploadImageButton"}
          type={"button"}
          value={"upload"}
          onClick={props.submitUrl}
          name={"image"}
        />
      </div>

      {props.loading ? <LoadingIndicator color={"black"} /> : props.message}
    </React.Fragment>
  );
};

export default UploadImageUI;
