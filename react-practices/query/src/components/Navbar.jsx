import { x } from "@xstyled/styled-components";
import React from "react";
import NavbarLogo from "./NavbarLogo";

const Navbar = () => {
  return (
    <x.div boxShadow="md" py={6} w="100%">
      <x.div w="100%" maxWidth={1160} display="flex" m="auto">
        <NavbarLogo />
      </x.div>
    </x.div>
  );
};

export default Navbar;
