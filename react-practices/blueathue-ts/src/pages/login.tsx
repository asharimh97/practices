import { AuthLayout } from "../components/layouts";
import LoginComponent from "../components/organisms/login";

const Login: React.FC = () => {
  return (
    <AuthLayout>
      <LoginComponent />
    </AuthLayout>
  );
};

export default Login;
