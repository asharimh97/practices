import React from "react";
import Box from "./Box";

type ContainerProps = {
  children?: React.ReactNode;
  [key: string]: any;
};

const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};

Container.defaultProps = {
  width: 1140,
  mx: "auto"
};

export default Container;
