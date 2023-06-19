import React from "react";

const LogisticsItem: React.FC<{
  children: React.ReactNode;
  icon: any;
}> = (props) => {
  const { icon: Icon } = props;
  return (
    <li>
      <span>{Icon}</span>
      <span>{props.children}</span>
    </li>
  );
};
export default LogisticsItem;
