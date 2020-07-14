// interface blessingSettingsState {
//   images: any;
// }

// const initialState = { images: [] };

const blessingSettings = (state = {}, action) => {
  switch (action.type) {
    case "PERAGRAPH_CHANGE":
      return { ...state, peragraph: action.value };

    case "IMAGE_ADD":
      return {
        ...state,
        images: {
          ...state.images,
          [Date.now().toString()]: {
            imageSrc: action.value,
            position: { xPosition: null, yPosition: null },
          },
        },
      };

    case "IMAGE_REMOVE":
      const imageList = state.images;
      const filterImageList = Object.keys(imageList).filter(
        (item) => action.value !== item
      );
      const mapToName = filterImageList.map((item) => {
        return { [item]: imageList[item] };
      });
      let convertToObject = {};
      try {
        convertToObject = Object.assign(...mapToName);
      } catch {}

      return {
        ...state,
        images: convertToObject,
      };

    case "SONG_ADD_URL":
      const song =
        action.value?.url.replace("watch?v=", "embed/") +
        "?autoplay=1" +
        `;start=${action.value.timeStart}`;
      console.log(song);
      return {
        ...state,
        song,
      };

    case "IMAGE_CORDINATES":
      return {
        ...state,
        windowDimension: action.value.windowDimension,
        images: {
          ...state.images,
          [action.value.imageID]: {
            ...state.images[action.value.imageID],
            position: {
              xPosition: action.value.xPosition,
              yPosition: action.value.yPosition,
            },
          },
        },
      };

    default:
      return { windowDimension: {}, images: {} };
  }
};

export default blessingSettings;
