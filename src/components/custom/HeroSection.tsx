import Image from "next/image";
import Link from "next/link";
import { HeroSectionProps } from "@/lib/interfaces";
import DOMPurify from "isomorphic-dompurify";
export function HeroSection({ data }: { readonly data: HeroSectionProps }) {
  const { heading, subHeading, image, ctaButton } = data;
  const imageURL = "http://localhost:1337" + image.url;
  const dangerousHTMLtext = subHeading.replace(/\n/g, "<br />");
  const cleanedHTMLtext = DOMPurify.sanitize(dangerousHTMLtext);
  return (
    <div className="relative overflow-hidden flex justify-center items-center w-full px-6 p-4 h-screen">
      <Image
        alt="Background"
        className="select-none pointer-events-none absolute inset-0 object-cover aspect/16:9 bg-no-repeat brightness-[.25]"
        src={imageURL}
        fill
      />
      <div className="relative flex flex-col items-center justify-center h-full text-white md:w-[40%] gap-4">
        <h1 className="text-3xl md:text-4xl font-bold">{heading}</h1>
        <p
          className="text-md md:text-xl"
          dangerouslySetInnerHTML={{ __html: cleanedHTMLtext }}
        ></p>
        <div className="md:flex gap-4">
          {(ctaButton || []).map((button) => (
            <div key={button.id} className="flex my-4">
              <Link href={button.url}>
                <button className="btn-primary">{button.name}</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
