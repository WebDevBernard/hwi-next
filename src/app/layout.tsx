import type { Metadata, Viewport } from "next";
import { Open_Sans, Noto_Sans, Roboto } from "next/font/google";
import "./globals.css";

const font = Open_Sans({ subsets: ["latin"] });

import { getGlobalData, getGlobalPageMetadata } from "@/data/loaders";
import { Header } from "@/components/custom/Header";
import { Footer } from "@/components/custom/Footer";
import { DialogProvider } from "@/hooks/useDialog";
export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getGlobalPageMetadata();

  return {
    title: metadata?.title,
    description: metadata.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = await getGlobalData();

  return (
    <html lang="en">
      <body className={`${font.className} bg-[#fffff]`}>
        <DialogProvider>
          <Header data={globalData.header} menu={globalData.menuHeadings} />
          {children}
          <Footer data={globalData.footer} />
        </DialogProvider>
      </body>
    </html>
  );
}
