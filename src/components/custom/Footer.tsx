import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { FooterProps } from "@/lib/interfaces";

export function Footer({ data }: Readonly<FooterProps>) {
  return (
    <div className="dark bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-gray-300">
          <h2 className=" text-lg">{data.heading}</h2>
          <p className="md:mb-9 text-sm">{data.subHeading}</p>
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
          <p className="flex my-4 md:mt-0 text-lg text-gray-300">
            {data.locationHeading}
          </p>
          <div className="flex gap-9">
            {(data.hoursLocation || []).map((location) => (
              <div className="" key={uuidv4()}>
                <p className="md:mt-0  text-gray-300 font-bold mb-4 underline underline-offset-2 decoration-4 decoration-secondary">
                  {location.locationName}
                </p>
                <p className="mt-4 md:mt-0 text-sm text-gray-300">
                  {location.address}
                </p>
                <p className="mb-4 md:mt-0 text-sm text-gray-300">
                  {location.phoneNumber}
                </p>
                <p className=" md:mt-0 text-sm text-gray-300">
                  {location.monFri}
                </p>
                <p className="md:mt-0 text-sm text-gray-300">{location.sat}</p>
                <p className=" md:mt-0 text-sm text-gray-300">{location.sun}</p>
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
