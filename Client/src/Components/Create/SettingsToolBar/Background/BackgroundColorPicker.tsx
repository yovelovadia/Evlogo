import React from "react";
import { useDispatch } from "react-redux";
import { backgroundChangeAtt } from "../../../../redux/actions";

export interface Props {
  checked: boolean;
  name: string;
  activeName: string;
  value: string;
}

const BackgroundColorPicker: React.FC<Props> = (props) => {
  const dispatch: any = useDispatch();

  const changeBgAtt = (bgKey: string, bgValue: string | boolean): void => {
    dispatch(backgroundChangeAtt(bgKey, bgValue));
  };

  return (
    <div>
      <input
        onChange={(data) => changeBgAtt(props.name, data.target.value)}
        type={"color"}
        className={"colorPicker"}
        value={props.checked ? props.value : "#919191"}
        disabled={!props.checked}
      />
      <input
        className={"checkbox"}
        checked={props.checked}
        type={"checkbox"}
        onChange={() => {
          changeBgAtt(props.activeName, !props.checked);
        }}
      />
    </div>
  );
};

export default React.memo(BackgroundColorPicker);
