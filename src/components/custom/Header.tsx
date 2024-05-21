import Link from "next/link";
import Image from "next/image";
import { HeaderProps } from "@/lib/interfaces";
import { MenuProps } from "@/lib/interfaces";
// { menu }: Readonly<MenuProps>
// { data }: Readonly<HeaderProps>

export async function Header({
  menu,
  data,
}: Readonly<MenuProps> & Readonly<HeaderProps>) {
  const imageURL = "http://localhost:1337" + data.logoText.icon.url;
  const newLogoText = data.logoText.name.split(" ");
  const shortLogoText =
    newLogoText.length >= 2
      ? newLogoText[0] + " " + newLogoText[1]
      : data.logoText.name;
  console.log(shortLogoText);
  return (
    <div className="bg-primary sticky top-0 z-20">
      <div className="container flex mx-auto items-center py-3 pl-5">
        <div className="flex items-center gap-4">
          <Image
            alt={data.logoText.name}
            src={imageURL}
            height={40}
            width={40}
          />
          <h1 className="text-sm hidden uppercase text-nowrap md:block tracking-[0.25em]">
            {data.logoText.name}
          </h1>
          <h1 className="text-xs block uppercase text-nowrap md:hidden tracking-[0.25em]">
            {shortLogoText}
          </h1>
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
                  {(menuItems.subMenuHeadings || []).map((subMenuHeading) => (
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
          <Link href={data.ctaButton.url}>
            <button className="hidden md:inline-block btn-secondary">
              {data.ctaButton.name}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
