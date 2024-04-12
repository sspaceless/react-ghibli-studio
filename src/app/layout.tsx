import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from "next/head";

const futuraBook = localFont({
  src: "../../public/fonts/FuturaPT-Book.woff",
  display: "swap",
  variable: "--font-futura-book",
});

export const metadata: Metadata = {
  title: "I ♡ GHIBLI",
  description: "Website with your favorite Studio Ghibli movies",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/futura-std-4"
          rel="stylesheet"
        />
      </Head>
      <body className={futuraBook.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
