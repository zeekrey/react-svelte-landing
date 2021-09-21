import React from "react";
/* https://github.com/vercel/next.js/issues/28596 */
/* eslint-disable-next-line */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { getCssText } from "../stitches.config";
import { IdProvider } from "@radix-ui/react-id";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Work+Sans:wght@700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <IdProvider>
            <Main />
            <NextScript />
          </IdProvider>
        </body>
      </Html>
    );
  }
}
