import { Link } from "react-router-dom";
import { colors } from "../../../styles/theme";
import { NAVIGATIONS } from "../../../utils/constants";
import { Box, Flex, Text } from "../../atoms";
import Blob from "./Blob";
import { Wrapper } from "./styled";

const SideNav: React.FC = () => {
  const imagePattern = (
    <defs>
      <pattern id="img1" patternUnits="userSpaceOnUse" width="10" height="10">
        <image href="/images/sky.jpg" x="0" y="0" width="10" height="10" />
      </pattern>
    </defs>
  );
  return (
    <Wrapper
      position="fixed"
      top="0"
      left={0}
      w={300}
      p={7}
      display={{ _: "none", md: "block" }}
    >
      <Flex mb="32px" justify="center" direction="column">
        <Blob
          pattern={imagePattern}
          fill="url(#img1)"
          style={{ position: "relative", zIndex: 2 }}
        />
        <Blob
          color={colors["cool-gray-300-a30"]}
          style={{
            transform: "rotateY(180deg)",
            position: "absolute",
            zIndex: 1
          }}
        />
      </Flex>
      {NAVIGATIONS.map(nav => {
        if (nav.children) {
          return (
            <Box mb={6}>
              <Text lowercase color="cool-gray-500" mb={3}>
                {nav.label}
              </Text>
              {nav.children.map(subnav => (
                <Link to={subnav.link}>
                  <Text color="gray-500" lowercase ml={4} mb={4}>
                    {subnav.label}
                  </Text>
                </Link>
              ))}
            </Box>
          );
        }

        return (
          <Link to={nav.link}>
            <Text color="gray-500" lowercase mb={4}>
              {nav.label}
            </Text>
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default SideNav;
