import Image from "next/image";
import Link from "next/link";
import { HeroSectionProps } from "@/lib/interfaces";
import DOMPurify from "isomorphic-dompurify";

export function HeroSection({ data }: { readonly data: HeroSectionProps }) {
  const { heading, subHeading, image, location, quote } = data;
  const imageURL = "http://localhost:1337" + image.url;
  const dangerousHTMLtext = subHeading.replace(/\n/g, "<br />");
  const cleanedHTMLtext = DOMPurify.sanitize(dangerousHTMLtext);

  return (
    <div className="relative overflow-hidden flex justify-center items-center w-full max-h-[1080px]">
      <Image
        alt="Background"
        className="select-none pointer-events-none flex object-cover aspect/16:9 bg-no-repeat contrast-[0.4] brightness-[1.2]"
        src={imageURL}
        fill
      />
      <div className="flex flex-col justify-center px-10 bg-purple-50 bg-opacity-70 h-screen text-black max-w-2xl gap-4 z-10">
        <h1 className="text-3xl md:text-4xl font-bold no-text-zoom">
          {heading}
        </h1>
        <p
          className="text-md no-text-zoom"
          dangerouslySetInnerHTML={{ __html: cleanedHTMLtext }}
        ></p>
        <span className="flex flex-col md:flex-row gap-4 mt-4">
          <Link href={"http://localhost:3000/quote"}>
            <button className="btn-primary no-text-zoom">{quote.name}</button>
          </Link>
          <Link href={location.url}>
            <button className="btn-secondary no-text-zoom">
              {location.name}
            </button>
          </Link>
        </span>
      </div>
      <div className="md:w-[30%] max-w-2xl "></div>
    </div>
  );
}
