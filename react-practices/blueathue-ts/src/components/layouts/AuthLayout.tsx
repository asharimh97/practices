import { Flex } from "../atoms";

interface AuthLayoutProps {
  children?: React.ReactNode;
  [key: string]: any;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, ...props }) => {
  return (
    <Flex justify="center" m="auto" maxWidth={375} width="100%">
      {children}
    </Flex>
  );
};

export default AuthLayout;
