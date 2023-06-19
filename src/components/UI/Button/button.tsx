import Link from "next/link";
import React from "react";
import classnames from "classnames";
import classes from "./button.module.css";

const Button: React.FC<{ link: string; children: React.ReactNode }> = (
  props
) => {
  return (
    <Link href={props.link} className={classnames(classes.link)}>
      {props.children}
    </Link>
  );
};

export default Button;
