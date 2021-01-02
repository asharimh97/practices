import Document, { Head, Main, NextScript, Html } from "next/document";
import getConfig from "next/config";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      // quite different with `_app.js` `getInitialProps`, this one
      // is used in server-side rendering data requirements such as
      // CSS-in-JS library like `styled-components`
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styleTags: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      // seal react styled component to avoid memory leak
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="id">
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
