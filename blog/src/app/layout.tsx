import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

library.add(faHouseChimney, faSun, faTwitter, faFacebook);

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Meta } from "./meta";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "layoutのタイトル",
  description: "layoutのdescription",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <Meta />
      <body className={inter.className}>
        <Header />
        <main className="bg-rose-50">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
