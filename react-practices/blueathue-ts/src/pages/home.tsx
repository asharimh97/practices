import { Link } from "react-router-dom";
import { Box, Flex, Text } from "../components/atoms";
import { HomeWrapper, Title } from "../components/organisms/home/styled";
import { NAVIGATIONS } from "../utils/constants";

function Home() {
  return (
    <HomeWrapper align="center">
      <Box p={7} w="100%">
        <Box mb="3.5em">
          <Title mb={3}>
            blue <br />
            at hue
          </Title>
          <Text color="gray">blue at hue catching a glue</Text>
        </Box>
        <Flex direction={{ _: "column", md: "row" }}>
          {NAVIGATIONS.map(nav => (
            <Link
              to={nav.children ? nav.children[0].link : nav.link}
              style={{ textDecoration: "none" }}
            >
              <Text
                color="gray"
                lowercase
                mr={{ _: 0, md: 4 }}
                mb={{ _: 5, md: 0 }}
              >
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
