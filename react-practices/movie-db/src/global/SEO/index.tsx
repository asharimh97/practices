import Head from "next/head";
import defaultSEOValues from "./defaultValues";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
}

function SEO({
  title,
  description,
  keywords,
  image,
  url,
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>

      {/* Icons */}

      {/* Meta tags */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta name="robots" content="noindex, nofollow" />
      <meta name="audience" content="general" />
      <meta name="content-language" content="EN-en" />
      <meta name="type" content="web" />
      <meta name="web_author" content="Ashari Muhammad H" />
      <meta name="copyright" content="Ashari Muhammad H" />
      <meta name="google" content="notranslate" />

      {/* Opengraph meta tags */}
      <meta name="og:type" content="website" />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
      <meta name="og:image" content={image} />
      <meta name="og:image:secure_url" content={image} />

      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}

SEO.defaultProps = {
  ...defaultSEOValues,
};

export default SEO;
