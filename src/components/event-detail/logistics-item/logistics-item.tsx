import React from "react";

const LogisticsItem: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  return <li>{props.children}</li>;
};
export default LogisticsItem;
