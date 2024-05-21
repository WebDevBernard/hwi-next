import type { Metadata } from "next";
import { Open_Sans, Noto_Sans, Roboto } from "next/font/google";
import "./globals.css";

const font = Open_Sans({ subsets: ["latin"] });

import { getGlobalData } from "@/data/loaders";
import { Header } from "@/components/custom/Header";
import { Footer } from "@/components/custom/Footer";

export const metadata: Metadata = {
  title: "Horizon West Insurance",
  description: "Insurance Services",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = await getGlobalData();

  return (
    <html lang="en">
      <body className={`${font.className} bg-[#fffff]`}>
        <Header data={globalData.header} menu={globalData.menuHeadings} />
        <div>{children}</div>
        <Footer data={globalData.footer} />
      </body>
    </html>
  );
}
