import React from "react";

const Snow: React.FC = () => {
  const snowList: number[] = [];
  for (let i = 0; i < 150; i++) {
    snowList.push(i);
  }

  return (
    <React.Fragment>
      {snowList.map((item) => (
        <div key={item} className={"snow"} />
      ))}
    </React.Fragment>
  );
};

export default React.memo(Snow); // use memo is a must here because then will rerender all snow all over again
