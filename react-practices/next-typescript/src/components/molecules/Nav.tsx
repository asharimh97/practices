import React from "react";
import Link from "next/link";
import { Flex } from "components/atoms";
import theme from "styles/theme";
import styled from "styled-components";

type NavProp = {
  icon: React.ReactNode;
  href: string;
  children: React.ReactNode;
};

const NavWrapper = styled(Flex).attrs({
  align: "center",
  px: 3
})`
  border-left: solid 1px;
  border-color: ${theme.colors.black["40"]};

  &:last-child {
    border-right: solid 1px ${theme.colors.black["40"]};
  }
`;

const Nav: React.FC<NavProp> = ({ icon, href, children }) => {
  const renderIcon = Icon => (
    <Icon
      data-testid="nav-icon"
      style={{ color: "#B75DEF", marginRight: "8px" }}
    />
  );

  return (
    <NavWrapper>
      <Link href={href}>
        <a>
          <Flex>
            {renderIcon(icon)} {children}
          </Flex>
        </a>
      </Link>
    </NavWrapper>
  );
};

export default Nav;
