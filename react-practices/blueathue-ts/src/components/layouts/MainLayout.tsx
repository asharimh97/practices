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
      <Box ml={{ _: 0, md: 300 }}>
        Sebelah sini contentnya
        {children}
      </Box>
    </>
  );
};

export default MainLayout;
