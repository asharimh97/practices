import { x } from "@xstyled/styled-components";
import { Box, Text } from "../../atoms";
import Input from "../../molecules/Input";

const LoginComponent: React.FC = () => {
  return (
    <Box p={10} w="100%">
      <Box
        borderRadius="lg"
        borderColor="cool-gray-300"
        borderWidth
        borderStyle="solid"
        w="100%"
        p={5}
      >
        <Box borderBottomColor="gray-300" borderBottomWidth pb={4} mb={4}>
          <Text bold fontSize="larger" mb="4px">
            Welcome to Blue at Hue
          </Text>
          <Text size="small" color="gray-400">
            We've been waiting for you though
          </Text>
        </Box>

        <Input
          label="Username"
          id="username"
          name="username"
          placeholder="Username"
        />
        <Input
          label="Password"
          id="password"
          name="password"
          placeholder="Password"
          type="password"
        />

        <x.button
          hoverColor="white"
          activeColor="white"
          focusColor="white"
          hoverBackgroundColor="green-400"
          focusBackgroundColor="green-500"
          activeBackgroundColor="green-500"
          outline="none"
          borderRadius
          w="100%"
          h="32px"
          transition="all 0.3s ease"
        >
          Login
        </x.button>
      </Box>
    </Box>
  );
};

export default LoginComponent;
