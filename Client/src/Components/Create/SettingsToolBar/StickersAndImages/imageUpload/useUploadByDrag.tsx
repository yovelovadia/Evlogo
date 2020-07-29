import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import fetchData from "../../../../../customeFunctions/fetchData";
import { addImage } from "../../../../../redux/actions";

// when uploading first time wont show until render from some reason got to check this out

const useUploadByDrag = () => {
  const dispatch = useDispatch();
  // const [link, setLink] = useState<string>(null);

  useEffect(() => {
    // uploading files by dragging on screen and placing them
    const uploadByDrag = async (droppedImage: File): Promise<void> => {
      try {
        if (droppedImage.type.slice(0, 5) !== "image") {
          return alert("File is not supported, upload only images");
        }
        const data = new FormData();
        data.append("image", droppedImage);
        const response = await fetchData(
          "http://localhost:5000/assets/uploadImage",
          "post",
          data
        );
        console.log(response);
        const link: string = response.data.link;
        dispatch(addImage(`http://localhost:5000/${link}`));
      } catch (err) {
        alert(err.response.data.error);
      }
    };

    const pageContainer = document.getElementById("pageContainer");
    pageContainer.addEventListener("dragover", (event: DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
    });
    pageContainer.addEventListener("drop", (event: DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
      uploadByDrag(event.dataTransfer.files[0]);
    });
    pageContainer.addEventListener("dragleave", (event: DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
    });
  }, []);
};

export default useUploadByDrag;
