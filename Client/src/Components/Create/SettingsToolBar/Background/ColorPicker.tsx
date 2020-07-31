import React from "react";

export interface Props {
  checked?: boolean;
  name: string;
  activeName?: string;
  value: string;
  onChange: (bgColorKey: string, bgColorValue: string | boolean) => void;
}

const ColorPicker: React.FC<Props> = (props) => {
  return (
    <div>
      <input
        onChange={(data) => props.onChange(props.name, data.target.value)}
        type={"color"}
        className={"colorPicker"}
        value={props.checked === false ? "#919191" : props.value}
        disabled={props.checked === false ? true : false}
      />
      {props.checked !== undefined ? (
        <input
          className={"checkbox"}
          checked={props.checked}
          type={"checkbox"}
          onChange={() => {
            props.onChange(props.activeName, !props.checked);
          }}
        />
      ) : null}
    </div>
  );
};

export default React.memo(
  ColorPicker,
  (prev, next) => prev.value === next.value
);
