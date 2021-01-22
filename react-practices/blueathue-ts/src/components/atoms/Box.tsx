import { x } from "@xstyled/styled-components";
import React from "react";

interface BoxProp {
  children?: React.ReactNode;
  [key: string]: any;
}

const Box: React.FC<BoxProp> = ({ children, ...props }) => {
  return <x.div {...props}>{children}</x.div>;
};

export default Box;
