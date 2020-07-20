import { CanvasTypes } from "../../Types";

const initialState: CanvasTypes = {
  images: {},
  peragraph: { text: "", textAlign: "left", fontSize: 30, color: "black" },
  song: "",
  background: { color1: "#F76464", color2: "#50EFF2" },
};

const canvas = (state = initialState, action) => {
  switch (action.type) {
    case "PERAGRAPH_CORD":
      const peragraphX: number = action.value.x;
      const peragraphY: number = action.value.y;
      const peraCord: CanvasTypes = {
        ...state,
        peragraph: { ...state.peragraph, x: peragraphX, y: peragraphY },
      };
      return peraCord;

    case "PERAGRAPH_CHANGE_ATT":
      const value: number | string = action.value.value;
      const key: string = action.value.key;
      const change: CanvasTypes = {
        ...state,
        peragraph: { ...state.peragraph, [key]: value },
      };
      return change;

    case "BACKGROUND_CHANGE":
      const color: string = action.value.color;
      const picked: string = action.value.picked;
      const background: CanvasTypes = {
        ...state,
        background: { ...state.background, [picked]: color },
      };

      return background;

    case "IMAGE_ADD":
      const imageAdd: CanvasTypes = {
        ...state,
        images: {
          ...state.images,
          ["id" + Date.now().toString()]: { src: action.value },
        },
      };
      return imageAdd;

    case "IMAGE_CORDINATES":
      const imageID: string = action.value.imageID;
      const x: number = action.value.x;
      const y: number = action.value.y;
      const rotation: number = action.value.rotation;
      const scaleX: number = action.value.scaleX;
      const scaleY: number = action.value.scaleY;
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
          },
        },
      };

      return imageCord;

    case "SONG_ADD_URL":
      const song =
        action.value?.url.replace("watch?v=", "embed/") +
        "?autoplay=1" +
        `;start=${action.value.timeStart}`;
      return {
        ...state,
        song,
      };

    default:
      return initialState;
  }
};

export default canvas;
