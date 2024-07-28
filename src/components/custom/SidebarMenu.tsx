"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { QuoteDialog } from "./QuoteDialog";
import { useDialog } from "@/hooks/useDialog";
import { CustomX } from "./CustomX";
import { MenuProps, HeaderProps } from "@/lib/interfaces";
export function SidebarMenu({
  menu,
  data,
  isSheetOpen,
  setIsSheetOpen,
}: Readonly<MenuProps> &
  Readonly<HeaderProps> &
  Readonly<{ isSheetOpen: boolean }> &
  Readonly<{ setIsSheetOpen: (value: boolean) => void }>) {
  const imageURL = "http://localhost:1337" + data.logoText.icon.url;
  const { onOpen: onOpenDialog } = useDialog();
  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetContent
        side="left"
        className="sm:w-full w-[300px] md:hidden p-4"
        hideClose
      >
        <SheetHeader className="flex flex-row items-center justify-between mb-6 space-y-0">
          <Link href={data.logoText.url}>
            <Image
              alt={data.logoText.name}
              src={imageURL}
              height={40}
              width={40}
            />
          </Link>
          <SheetClose>
            <CustomX />
          </SheetClose>
        </SheetHeader>
        <hr />
        {(menu || []).map((menuItems) => (
          <div key={menuItems.id} className="">
            <p className="font-semibold text-sm block py-3">
              {menuItems.title}
            </p>
            {menuItems.subMenuHeadings.length > 0 && (
              <div className="">
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
        <button className="btn-secondary mt-4" onClick={onOpenDialog}>
          {data.ctaButton.name}
        </button>
        <QuoteDialog />
      </SheetContent>
    </Sheet>
  );
}
