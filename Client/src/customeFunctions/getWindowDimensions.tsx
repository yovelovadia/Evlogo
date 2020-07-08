import React from "react";

// for getting the dimension of the blessing area not the whole window
const getWindowDimensions = (): {
  screenWidth: number;
  screenHeight: number;
} => {
  try {
    const data = document
      .getElementsByClassName("BlessingLocation")[0]
      .getBoundingClientRect();

    const screenHeight = data.height;
    const screenWidth = data.width;
    return { screenWidth, screenHeight };
  } catch {
    return { screenWidth: 1, screenHeight: 1 }; // incase returnin via backwards this is the default
  }
};

export default getWindowDimensions;
