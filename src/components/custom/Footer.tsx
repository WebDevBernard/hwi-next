import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import Link from "next/link";
import { FooterProps } from "@/lib/interfaces";

export function Footer({ data }: Readonly<FooterProps>) {
  return (
    <div className="dark bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-gray-300">
          <h2 className=" text-lg">{data.tagLineHeading}</h2>
          <p className="md:mb-9 text-sm">{data.tagLineSubHeading}</p>
          <div className="hidden md:flex justify items-center gap-4">
            <Image
              className="grayscale w-auto h-auto"
              alt="HWI LOGO"
              src={`http://localhost:1337${data.icon.url}`}
              height={40}
              width={40}
            />
            <p className="mt-4 md:mt-0 text-sm text-gray-300">
              {data.copyright}
            </p>
          </div>
        </div>

        <section>
          <h1 className="flex my-4 md:mt-0 text-md text-slate-400 uppercase">
            {data.locationHeading}
          </h1>
          <div className="flex gap-9">
            {(data.hoursLocation || []).map((location) => (
              <div className="space-y-2" key={uuidv4()}>
                <section className="max-w-[190px]">
                  <h2 className=" text-slate-300 font-bold mb-4">
                    {location.locationName}
                  </h2>
                  <h2 className="text-slate-400 font-bold text-sm">
                    {data.addressHeading}
                  </h2>

                  <Link
                    href={location.googleMapsLink}
                    rel="noopener noreferrer"
                    target="_blank"
                    className=" text-sm text-gray-300 underline underline-offset-4"
                  >
                    {location.address}
                  </Link>
                </section>
                <section>
                  <h2 className="text-slate-400 font-bold text-sm">
                    {data.phoneHeading}
                  </h2>
                  <Link
                    href={`tel:${location.phoneNumber.replace(
                      /[()\-\s]/g,
                      ""
                    )}`}
                    className="text-sm text-gray-300 underline underline-offset-4"
                  >
                    {location.phoneNumber}
                  </Link>
                </section>
                <section>
                  <h2 className="text-slate-400 font-bold text-sm">
                    {data.hoursHeading}
                  </h2>
                  <p className="text-sm text-gray-300">{location.monFri}</p>
                  <p className="text-sm text-gray-300">{location.sat}</p>
                  <p className="text-sm text-gray-300">{location.sun}</p>
                </section>
              </div>
            ))}
          </div>
        </section>
        <div className="block md:hidden mt-8 text-gray-300">
          <div className="flex justify-center items-center gap-4">
            <Image
              className="w-auto h-auto"
              alt="HWI LOGO"
              src={`http://localhost:1337${data.icon.url}`}
              height={40}
              width={40}
            />
            <p className="md:mt-0 text-sm text-gray-300">{data.copyright}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
