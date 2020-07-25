export interface Props {
  src?: string;
  data?: any;
  imageID?: string;
}

export interface ImageProps {
  image: ImageType;
  imageID: string;
  dispatch: any;
  selected: (data: any) => void;
  selectedID: (id: string) => void;
}

export interface ColorPickerProps {
  checked: boolean;
  name: string;
  activeName: string;
  value: string;
}

export interface ImageType {
  src?: string;
  rotate?: number;
  x?: number;
  y?: number;
  imageID?: string;
  rotation?: number;
  scaleX?: number;
  scaleY?: number;
  precentageWidth?: number;
}

export interface Peragraph {
  fontSize?: number;
  lineHeight: number;
  fontFamily?: string;
  fading?: boolean;
  color?: string;
  text: string;
  x?: number;
  y?: number;
  dispatch?: any;
  textAlign?: string;
}

export interface PeragraphProps {
  peragraph: Peragraph;
  dispatch: any;
}

export interface BackgroundType {
  color1: string;
  color2: string;
  color2Active: boolean;
  color3: string;
  color3Active: boolean;
  color4: string;
  color4Active: boolean;
  degree: number;
  animated: boolean;
}

export interface CanvasTypes {
  song?: string;
  peragraph: Peragraph;
  images?: { [key: string]: ImageType };
  background?: BackgroundType;
}

export interface UserInfo {
  email: string;
  password: string;
  name?: string;
  admin?: boolean;
}

export interface TextInputProps {
  name: string;
  placeholder: string;
  handleChange: (action: string, data?: string) => void;
  type?: string;
}
