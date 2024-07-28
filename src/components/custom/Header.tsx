"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeaderProps } from "@/lib/interfaces";
import { MenuProps } from "@/lib/interfaces";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { QuoteDialog } from "./QuoteDialog";
import { SidebarMenu } from "./SidebarMenu";
import { useDialog } from "@/hooks/useDialog";

export function Header({
  menu,
  data,
}: Readonly<MenuProps> & Readonly<HeaderProps>) {
  const imageURL = "http://localhost:1337" + data.logoText.icon.url;
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const newLogoText = data.logoText.name.split(" ");
  const shortLogoText =
    newLogoText.length >= 2
      ? newLogoText[0] + " " + newLogoText[1]
      : data.logoText.name;

  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  const { onOpen: onOpenDialog } = useDialog();
  useEffect(() => {
    if (isDesktop) {
      setIsSheetOpen(false);
    }
  }, [isDesktop]);

  return (
    <div className="bg-primary sticky top-0 z-20">
      <div className="container flex mx-auto items-center py-3 pl-5">
        <div className="flex items-center gap-4">
          <Link href={data.logoText.url}>
            <Image
              alt={data.logoText.name}
              src={imageURL}
              height={40}
              width={40}
            />
          </Link>
          <Link
            href={data.logoText.url}
            className="text-sm hidden uppercase text-nowrap md:block tracking-[0.25em]"
          >
            {data.logoText.name}
          </Link>
          <Link
            href={data.logoText.url}
            className="text-xs block uppercase text-nowrap md:hidden tracking-[0.25em]"
          >
            {shortLogoText}
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end text-sm gap-8">
          {(menu || []).map((menuItems) => (
            <div
              key={menuItems.id}
              className="hidden md:block cursor-pointer relative group"
            >
              <p className="font-semibold text-sm block py-3">
                {menuItems.title}
              </p>
              {menuItems.subMenuHeadings.length > 0 && (
                <div className="cursor-pointer hidden group-hover:block rounded-lg absolute left-2 top-full p-1 bg-[#f2f4ff]">
                  {menuItems.subMenuHeadings.map((subMenuHeading) => (
                    <Link
                      key={subMenuHeading.id}
                      className="block whitespace-nowrap pl-2 pr-24 py-2 my-1 text-sm hover:bg-slate-300 rounded"
                      href={subMenuHeading.url}
                    >
                      {subMenuHeading.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button
            className="hidden md:inline-block btn-secondary"
            onClick={onOpenDialog}
          >
            {data.ctaButton.name}
          </button>
          <QuoteDialog />
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsSheetOpen(true)}
          >
            <MenuIcon size={22} />
          </Button>
          <SidebarMenu
            menu={menu}
            data={data}
            isSheetOpen={isSheetOpen}
            setIsSheetOpen={setIsSheetOpen}
          />
        </div>
      </div>
    </div>
  );
}
