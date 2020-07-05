export interface Props {
  addImage?: (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>,
    image: string
  ) => void;
  src?: string;
}
