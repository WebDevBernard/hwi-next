import Image from "next/image";
import Link from "next/link";
import { HeroSectionProps } from "@/lib/interfaces";

export function HeroSection({ data }: { readonly data: HeroSectionProps }) {
  const { heading, subHeading, image, ctaButton } = data;
  const imageURL = "http://localhost:1337" + image.url;

  return (
    <div className="relative overflow-hidden w-full h-screen">
      <Image
        alt="Background"
        className="absolute inset-0 object-cover  aspect/16:9 bg-no-repeat brightness-[.25]"
        src={imageURL}
        height={1080}
        width={1920}
      />
      <div className="relative z-10 flex flex-col justify-center h-full mx-[300px] text-white w-[40%]">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-4xl">
          {heading}
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-lg">{subHeading}</p>
        <div className="flex gap-4">
          {(ctaButton || []).map((button) => (
            <div key={button.id} className="flex">
              <Link
                className="mt-4 flex items-center justify-center px-9 py-2 text-base font-medium text-white bg-[#4478ff] rounded-3xl shadow hover:bg-slate-400"
                href={button.url}
              >
                {button.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-blue h-full z-20">ashasd</h1>
    </div>
  );
}
