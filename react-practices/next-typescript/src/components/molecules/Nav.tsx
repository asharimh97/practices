import React from "react";
import Link from "next/link";
import { Flex } from "components/atoms";

type NavProp = {
  icon: React.ReactNode;
  href: string;
  children: React.ReactNode;
};

const Nav: React.FC<NavProp> = ({ icon, href, children }) => {
  return (
    <Link href={href}>
      <a>
        <Flex align="center">
          {icon} {children}
        </Flex>
      </a>
    </Link>
  );
};

export default Nav;
