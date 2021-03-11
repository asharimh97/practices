import { x } from "@xstyled/styled-components";
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <x.div m="auto" w="100%" maxWidth={1160} py={12}>
        {children}
      </x.div>
    </>
  );
};

export default Layout;
