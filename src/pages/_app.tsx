import React from "react";
import "../app/styles/globals.css";

const Application: React.FC<{ Component: any; pageProps: any }> = (props) => {
  return <props.Component {...props.pageProps} />;
};

export default Application;
