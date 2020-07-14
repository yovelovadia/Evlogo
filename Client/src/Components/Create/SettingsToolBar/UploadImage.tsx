import React, { useState } from "react";
import fetchData from "../../../customeFunctions/fetchData";

const UploadImage: React.FC = () => {
  const [image, setImage] = useState(null);

  const upload = (image: React.ChangeEvent<HTMLInputElement>): void => {
    const upload: File = image.target.files[0];
    setImage(upload);
  };

  const submit = async (): Promise<void> => {
    const data: FormData = new FormData();
    data.append("image", image);
    await fetchData("http://localhost:5000/assets/uploadImage", "post", data);
  };

  return (
    <div>
      <input
        onChange={upload}
        type={"file"}
        name={"image"}
        accept={"image/*"}
      />
      <input type={"button"} value={"upload"} onClick={submit} name={"image"} />
    </div>
  );
};
export default UploadImage;
