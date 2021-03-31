import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Next Js Application for Trying Websocket</title>
        </Head>
        <body>
        <Main />
        <NextScript />
          <script src="/js/primus.min.js" />
        </body>
      </Html>
    )
  }
}

export default MyDocument;