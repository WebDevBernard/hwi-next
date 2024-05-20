import Link from "next/link";
import Image from "next/image";
import { FooterProps } from "@/lib/interfaces";

export function Footer({ data }: Readonly<FooterProps>) {
  const { logoText, text } = data;
  // console.log(data.headerLogo);
  return (
    <div className="dark bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-gray-300">
          <h2 className=" text-lg">Need to renew ICBC Autoplan?</h2>
          <p className="mb-9 text-sm">
            Give us a call and we can process your renewal over the phone.
          </p>
          <div className="flex justify items-center gap-4">
            <Image
              className="grayscale"
              alt="HWI LOGO"
              src={`http://localhost:1337${logoText.icon.url}`}
              height={40}
              width={40}
            />
            <p className="mt-4 md:mt-0 text-sm text-gray-300">{text}</p>
          </div>
        </div>

        <section>
          <p className="flex justify-end my-4 md:mt-0 text-lg text-gray-300">
            Locations
          </p>
          <div className="flex gap-9">
            <div>
              <p className="mt-4 md:mt-0  text-gray-300 font-bold mb-4 underline underline-offset-2 decoration-4 decoration-[#4478ff]">
                Vancouver
              </p>
              <p className="mt-4 md:mt-0 text-sm text-gray-300">
                4802 Main St. Vancouver, BC
              </p>
              <p className="mt-4 md:mt-0 text-sm text-gray-300 mb-4">
                604-566-5908
              </p>
              <p className="mt-4 md:mt-0 text-sm text-gray-300">
                Mon - Fri 9:30am - 5:30pm
              </p>
              <p className="mt-4 md:mt-0 text-sm text-gray-300">
                Sat 10:00am - 5:00pm
              </p>
              <p className="mt-4 md:mt-0 text-sm text-gray-300">Sun Closed</p>
            </div>
            <div>
              <p className="mt-4 md:mt-0  text-gray-300 font-bold mb-4 underline underline-offset-2 decoration-4 decoration-[#4478ff]">
                Surrey
              </p>
              <p className="mt-4 md:mt-0 text-sm text-gray-300 ">
                16033 108 Ave Surrey, BC
              </p>
              <p className="mt-4 md:mt-0 text-sm text-gray-300 mb-4">
                604-951-9488
              </p>
              <p className="mt-4 md:mt-0 text-sm text-gray-300 ">
                Mon - Fri 9:00am - 6:00pm
              </p>
              <p className="mt-4 md:mt-0 text-sm text-gray-300">
                Sat 9:00am - 5:00pm
              </p>
              <p className="mt-4 md:mt-0 text-sm text-gray-300">
                Sun 10am - 5pm
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
