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
        ml={{ _: 0, lg: 300 }}
        p={{ _: "16px", lg: "32px" }}
        pt={{ _: "64px", lg: "32px" }}
      >
        {children}
      </Box>
    </>
  );
};

export default MainLayout;
