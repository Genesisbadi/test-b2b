import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/lato300.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          data-next-font="size-adjust"
        />
      </Head>
      <body className="text-[#555555]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
