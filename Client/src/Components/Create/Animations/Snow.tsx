import React from "react";

const Snow: React.FC<{ color: string }> = ({ color }) => {
  const snowList: number[] = [];
  for (let i = 0; i < 300; i++) {
    snowList.push(i);
  }

  return (
    <React.Fragment>
      {snowList.map((item) => (
        <div style={{ backgroundColor: color }} key={item} className={"snow"} />
      ))}
    </React.Fragment>
  );
};

export default Snow;
