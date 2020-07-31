import * as actions from "./actionTypes";

export const addImage = (value) => {
  return { type: actions.IMAGE_ADD, value };
};

export const imageCordinates = (value) => {
  return { type: actions.IMAGE_CORDINATES, value };
};

export const imageDelete = (value) => {
  return { type: actions.IMAGE_DELETE, value };
};

export const peragraphCordinates = (value) => {
  return { type: actions.CHANGE_PERA_CORD, value };
};

export const peragraphChangeAtt = (peraValue, peraKey) => {
  return { type: actions.PERAGRAPH_CHANGE_ATT, value: { peraValue, peraKey } };
};

export const backgroundChangeAtt = (bgKey, bgValue, bgSection) => {
  return {
    type: actions.BACKGROUND_CHANGE_ATT,
    value: { bgKey, bgValue, bgSection },
  };
};

export const songUrl = (value) => {
  return { type: actions.SONG_ADD_URL, value };
};
