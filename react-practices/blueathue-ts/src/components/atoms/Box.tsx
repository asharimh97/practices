import { x } from "@xstyled/styled-components";
import React from "react";
import { BaseStyledComponentProp } from "../../../@types/general";

interface BoxProp extends BaseStyledComponentProp {
  children?: React.ReactNode;
  [key: string]: any;
}

const Box: React.FC<BoxProp> = ({ children, ...props }) => {
  // @ts-ignore
  return <x.div {...props}>{children}</x.div>;
};

export default Box;
