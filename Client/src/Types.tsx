export interface Props {
  imageSrc?: string;
  data?: any;
  imageID?: string;
}

export interface screenDimensions {
  screenHeight: number;
  screenWidth: number;
}

export interface Cordinates {
  imageID?: string;
  xPosition: number;
  yPosition: number;
  windowDimension?: screenDimensions;
}
