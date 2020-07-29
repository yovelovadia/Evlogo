import React from "react";

const FontSelector: React.FC<{
  fontFamily: string;
  changeAtt: (value: string, attName: string) => void;
}> = ({ fontFamily, changeAtt }) => {
  return (
    <select
      className={"fontFamilySelector"}
      value={fontFamily}
      onChange={(data) => changeAtt(data.target.value, "fontFamily")}
    >
      {fonts.map((font) => (
        <option key={font} style={{ fontFamily: font }} value={font}>
          {font}
        </option>
      ))}
    </select>
  );
};

export default FontSelector;

const fonts: string[] = [
  "Ariel",
  "cursive",
  "sans-serif",
  "Amatic SC",
  "Anton",
  "Caveat",
  "Chewy",
  "Courgette",
  "Cousine",
  "Dancing Script",
  "Modak",
  "Permanent Marker",
  "Ranchers",
  "Rubik",
  "Secular One",
  "Suez One",
  "Indie Flower",
  "Farsan",
  "Saira Condensed",
];
