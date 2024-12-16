import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.cdnfonts.com/css/futura-std-4" rel="stylesheet" />
      </head>
      <body className={futuraBook.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
