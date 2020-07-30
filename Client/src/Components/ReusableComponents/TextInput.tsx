import React from "react";

export interface Props {
  name: string;
  placeholder: string;
  handleChange: (action: string, data?: string) => void;
  type?: string;
}

const TextInput = (props): React.FunctionComponentElement<Props> => {
  return (
    <label className="field a-field a-field_a2">
      <input
        className="field__input a-field__input"
        placeholder={props.placeholder}
        required
        onChange={(data: React.ChangeEvent<HTMLInputElement>) =>
          props.handleChange(data.target.value)
        }
        type={props.type || "text"}
        spellCheck={false}
      />
      <span className="a-field__label-wrap">
        <span className="a-field__label">{props.name}</span>
      </span>
    </label>
  );
};

export default TextInput;
