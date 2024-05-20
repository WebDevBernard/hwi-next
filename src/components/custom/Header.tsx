import Link from "next/link";
import Image from "next/image";
import { HeaderProps } from "@/lib/interfaces";

export async function Header({ data }: Readonly<HeaderProps>) {
  const { logoText, ctaButton } = data;
  // console.log(data);
  const imageURL = "http://localhost:1337" + data.logoText.icon.url;
  return (
    <div className="bg-[#f2f1ee] sticky top-0 z-20">
      <div className="container mx-auto flex items-center py-4 pl-5">
        <div className="flex items-center gap-4">
          <Image alt="HWI LOGO" src={imageURL} height={40} width={40} />
          <h1 className="uppercase text-sm tracking-[0.25em]">
            Horizon West Insurance
          </h1>
        </div>
        <div className="flex flex-1 items-center justify-end text-sm">
          <div className="cursor-pointer relative group">
            <Link
              href={"/"}
              className=" hover:underline underline-offset-8 font-semibold text-sm"
            >
              Our Services
            </Link>
            <div className="group-hover:block hidden text-right absolute right-0 top-full mt-5 px-4 bg-[#f2f1ee]">
              <Link
                href={"/"}
                className="block whitespace-nowrap p-2 hover:bg-[#f2f1ee] text-sm"
              >
                Personal
              </Link>
              <Link
                href={"/"}
                className="block whitespace-nowrap p-2 hover:bg-[#f2f1ee] text-sm"
              >
                Commercial
              </Link>
              <Link
                href={"/"}
                className="block whitespace-nowrap p-2 hover:bg-[#f2f1ee] text-sm"
              >
                Auto
              </Link>
            </div>
          </div>
          <Link
            href={"/"}
            className="px-5 hover:underline underline-offset-8 font-semibold text-sm"
          >
            Contact Us
          </Link>
          <Link href={ctaButton.url}>
            <button className="outline outline-1 outline-[#4478ff] inline-block px-9 py-2 uppercase rounded-3xl cursor-pointer text-[#4478ff] text-sm hover:bg-slate-200">
              Get a Quote
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
