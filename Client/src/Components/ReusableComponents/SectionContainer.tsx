import React from "react";

interface Props {
  children: any;
  id: string;
}

const SectionContainer: React.FC<Props> = ({ children, id }) => {
  return (
    <div id={id} className={"sectionContainer"}>
      <h1 className={"sectionContainerHeader"}>
        <span>{id}</span>
      </h1>
      {children}
    </div>
  );
};

export default React.memo(SectionContainer);
