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
