import { CloseIcon, NavWrapper, Wrapper } from "./styled";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { Box, Text } from "../../atoms";
import { NAVIGATIONS } from "../../../utils/constants";
import { Link } from "react-router-dom";

const MobileNav: React.FC = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <>
      <NavWrapper onClick={() => setShowNav(true)}>
        <IoIosMenu />
      </NavWrapper>
      <Wrapper show={showNav}>
        <CloseIcon onClick={() => setShowNav(false)}>
          <IoIosClose />
        </CloseIcon>
        <Box textAlign="center">
          {NAVIGATIONS.map(nav => {
            if (nav.children) {
              return (
                <Box mb={5}>
                  <Text lowercase color="cool-gray-500" size="sm" mb={3}>
                    {nav.label}
                  </Text>
                  {nav.children.map(chl => (
                    <Link to={chl.link}>
                      <Text lowercase color="black" mb={4}>
                        {chl.label}
                      </Text>
                    </Link>
                  ))}
                </Box>
              );
            }

            return (
              <Link to={nav.link}>
                <Text lowercase color="black" mb={4}>
                  {nav.label}
                </Text>
              </Link>
            );
          })}
        </Box>
      </Wrapper>
    </>
  );
};

export default MobileNav;
