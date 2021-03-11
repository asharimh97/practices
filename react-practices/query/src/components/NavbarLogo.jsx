import { x } from "@xstyled/styled-components";
import React from "react";
import { IoIosMegaphone } from "react-icons/io";
import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
      <x.div display="flex" alignItems="center">
        <IoIosMegaphone size="20px" style={{ marginRight: "8px" }} />
        <div>
          <x.p fontWeight={700}>Movlie</x.p>
          <x.p fontSize="x-small">Movie Libraries</x.p>
        </div>
      </x.div>
    </Link>
  );
};

export default NavbarLogo;
