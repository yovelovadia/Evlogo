import React, { useState, useEffect } from "react";
import ImageCarousel from "./Carousels/ImageCarousel";
import UploadImage from "./imageUpload/UploadImage";
import fetchData from "../../../../customeFunctions/fetchData";
import useUploadByDrag from "./imageUpload/useUploadByDrag";
import { FetchedImages } from "../../../../Types";

// prettier-ignore
const StickersAndImages: React.FC = () => {
  const [userImages, setUserImages] = useState<FetchedImages[] | null>(null);
  const [defaultImages, setDefaultImages] = useState<FetchedImages[] | null>(
    null
  );

  useUploadByDrag();

  const getImages = async (url): Promise<FetchedImages[]> => {
    const response: any = await fetchData(url, "get");
    return response.data;
  };

  const fetchToState = React.useCallback(async (url, isUserImages): Promise<any> => {
    console.log("rindur");
    let mounted: boolean = true;
    if (mounted) {
      try {
        getImages(url).then((images) => {
          if (isUserImages) {
            setUserImages(images);
          } else {
            setDefaultImages(images);
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
    return () => (mounted = false);
  }, []);

  useEffect(() => {
    fetchToState("http://localhost:5000/Assets/getDefaultImages", false);
    fetchToState("http://localhost:5000/Assets/getUserImages", true);
  }, []);



  return (
    <React.Fragment>
      <ImageCarousel images={defaultImages} />
      <ImageCarousel images={userImages} />
      <UploadImage fetchToState={fetchToState} />
    </React.Fragment>
  );
};

export default StickersAndImages;
