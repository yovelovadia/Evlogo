import React from "react";

const Snow: React.FC = () => {
  const snowList: number[] = [];
  for (let i = 0; i < 150; i++) {
    snowList.push(i);
  }

  return (
    <div>
      {snowList.map((item) => (
        <div key={item} className={"snow"} />
      ))}
    </div>
  );
};

export default React.memo(Snow); // use memo is a must here because then will rerender all snow all over again
