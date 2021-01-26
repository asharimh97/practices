import { Link } from "react-router-dom";
import { Box, Flex, Text } from "../components/atoms";
import { HomeWrapper, Title } from "../components/organisms/home/styled";
import { NAVIGATIONS } from "../utils/constants";

function Home() {
  return (
    <HomeWrapper align="center">
      <Box p={7} w="100%">
        <Box mb={10}>
          <Title mb={3}>
            blue <br />
            at hue
          </Title>
          <Text size="l" color="gray">
            blue at hue catching a glue
          </Text>
        </Box>
        <Flex>
          {NAVIGATIONS.map(nav => (
            <Link
              to={nav.children ? nav.children[0].link : nav.link}
              style={{ textDecoration: "none" }}
            >
              <Text color="gray" lowercase mr={4}>
                {nav.label}
              </Text>
            </Link>
          ))}
        </Flex>
      </Box>
    </HomeWrapper>
  );
}

export default Home;
