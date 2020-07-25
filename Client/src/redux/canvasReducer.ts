import { CanvasTypes, ImageType } from "../Types";
import * as actions from "./actionTypes";

let imageNumber: number = 0;

const initialState: CanvasTypes = {
  images: {},
  peragraph: {
    text: "",
    textAlign: "left",
    fontSize: 30,
    lineHeight: 1,
    color: "#000000",
    fontFamily: "sans-serif",
    x: 100,
    y: 100,
  },
  song: "",
  background: {
    color1: "#ee7752",
    color2: "#e73c7e",
    color2Active: true,
    color3: "#23a6d5",
    color3Active: true,
    color4: "#23d5ab",
    color4Active: true,
    animated: true,
    degree: 90,
  },
};

const canvasReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGE_PERA_CORD:
      const peragraphX: number = action.value.x;
      const peragraphY: number = action.value.y;
      const peraCord: CanvasTypes = {
        ...state,
        peragraph: { ...state.peragraph, x: peragraphX, y: peragraphY },
      };
      return peraCord;

    case actions.PERAGRAPH_CHANGE_ATT:
      const peraValue: number | string = action.value.peraValue;
      const peraKey: string = action.value.peraKey;
      const change: CanvasTypes = {
        ...state,
        peragraph: { ...state.peragraph, [peraKey]: peraValue },
      };
      return change;

    case actions.BACKGROUND_CHANGE_ATT:
      const bgValue: string | boolean = action.value.bgValue;
      const bgKey: string = action.value.bgKey;
      const background: CanvasTypes = {
        ...state,
        background: { ...state.background, [bgKey]: bgValue },
      };

      return background;

    case actions.IMAGE_ADD:
      const imageAdd: CanvasTypes = {
        ...state,
        images: {
          ...state.images,
          [`image${++imageNumber}`]: { src: action.value },
        },
      };
      return imageAdd;

    case actions.IMAGE_DELETE:
      const imageIdForDelete: string = action.value;
      const images: { [key: string]: ImageType } = state.images;
      delete images[imageIdForDelete];

      const imageDelete: CanvasTypes = { ...state, images };

      return imageDelete;

    case actions.IMAGE_CORDINATES:
      const imageID: string = action.value.imageID;
      const x: number = action.value.x;
      const y: number = action.value.y;
      const rotation: number = action.value.rotation;
      const scaleX: number = action.value.scaleX;
      const scaleY: number = action.value.scaleY;
      const precentageWidth: number = action.value.precentageWidth;
      const imageCord: CanvasTypes = {
        ...state,
        images: {
          ...state.images,
          [imageID]: {
            ...state.images[imageID],
            x,
            y,
            rotation,
            scaleX,
            scaleY,
            precentageWidth,
          },
        },
      };

      return imageCord;

    case actions.SONG_ADD_URL:
      const timeStart: string | undefined = action.value.timeStart;
      const songAdd: string =
        action.value?.url.replace("watch?v=", "embed/") +
        "?autoplay=1" +
        `;start=${timeStart ? timeStart : 0}`;

      const song: CanvasTypes = { ...state, song: songAdd };

      return song;

    default:
      return initialState;
  }
};

export default canvasReducer;
