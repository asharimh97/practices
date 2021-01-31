import { Box } from "../atoms";
import MobileNav from "../molecules/MobileNav";
import SideNav from "../molecules/SideNav";

interface MainLayoutProps {
  children?: React.ReactNode;
  [key: string]: any;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, ...props }) => {
  return (
    <>
      <MobileNav />
      <SideNav />
      <Box
        ml={{ _: 0, md: 300 }}
        p={{ _: "16px", md: "32px" }}
        pt={{ _: "64px", md: "32px" }}
      >
        {children}
      </Box>
    </>
  );
};

export default MainLayout;
