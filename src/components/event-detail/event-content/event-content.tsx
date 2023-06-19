import React from "react";

const EventContent: React.FC<{ children: React.ReactNode }> = (props) => {
  return <section>{props.children}</section>;
};
export default EventContent;
