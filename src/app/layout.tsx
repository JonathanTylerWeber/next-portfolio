import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jonathan Weber",
  description: "Jonathan Weber's web development portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className={`${kanit.className} antialiased`}>
        <main>
          <Preloader>{children}</Preloader>
        </main>
      </body>
    </html>
  );
}
