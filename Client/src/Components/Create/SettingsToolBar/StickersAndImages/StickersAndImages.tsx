import React, { useState, useEffect } from "react";
import ImageCarousel from "./Carousels/ImageCarousel";
import UploadImage from "./imageUpload/UploadImage";
import fetchData from "../../../../customeFunctions/fetchData";
import useUploadByDrag from "./imageUpload/useUploadByDrag";
import { FetchedImages } from "../../../../Types";

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

  useEffect(() => {
    let mounted: boolean = true;
    if (mounted) {
      try {
        getImages(
          "http://localhost:5000/Assets/getDefaultImages"
        ).then((images) => setDefaultImages(images));
      } catch (err) {
        console.log(err);
      }
    }
    return () => (mounted = false);
  }, []);

  useEffect(() => {
    let mounted: boolean = true;
    if (mounted) {
      try {
        getImages("http://localhost:5000/Assets/getUserImages").then((images) =>
          setUserImages(images)
        );
      } catch (err) {
        console.log(err);
      }
    }
    return () => (mounted = false);
  }, []);

  return (
    <React.Fragment>
      <ImageCarousel images={defaultImages} />
      <ImageCarousel images={userImages} />
      <UploadImage />
    </React.Fragment>
  );
};

export default StickersAndImages;
