import React from "react";
import { Helmet } from "react-helmet";

type Props = {
  title?: string;
  [key: string]: any;
};

const SEO: React.FC<Props> = ({ title, ...props }) => {
  return (
    <Helmet>
      <title>{title ? `${title} - ` : ""}Book Journey</title>
    </Helmet>
  );
};

export default SEO;
