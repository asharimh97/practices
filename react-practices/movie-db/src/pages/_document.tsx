import Document, {
  Html, Head, Main, NextScript, DocumentContext,
} from "next/document";
import { getColorModeInitScriptElement } from "@xstyled/styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          {getColorModeInitScriptElement()}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
