import React from "react";
import { Container } from "./atoms";
import SEO from "./SEO";

type Prop = {
  children?: any;
  title?: string;
};

const Layout: React.FC<Prop> = ({ children, title, ...props }) => {
  return (
    <>
      {title && <SEO title={title} />}
      <Container
        height={["100vh", null, "calc(100vh - 98px)"]}
        maxHeight="100%"
        px={[4, null, null, "0px"]}
      >
        {children}
      </Container>
    </>
  );
};

export default Layout;
