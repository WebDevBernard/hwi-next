import { QuoteSectionProps } from "@/lib/interfaces";
import Link from "next/link";
export function QuoteSection({ data }: { readonly data: QuoteSectionProps }) {
  const {} = data;

  return (
    <div className="">
      {data && (
        <section className="container mx-auto md:px-6 lg:py-12">
          <h2 className="flex px-4 py-12 justify-center items-center text-2xl font-bold">
            {data.heading}
          </h2>
          <p className="flex mx-[30%] px-4  justify-center items-center text-sm text-cente">
            {data.subHeading}
          </p>
          <div className="flex px-4 py-12 justify-center items-center">
            <Link href={`http://localhost:1337${data.ctaButton.url}`}>
              <button className=" bg-[#4478ff] inline-block px-9 py-2 uppercase rounded-3xl cursor-pointer text-white text-sm hover:bg-slate-200">
                {data.ctaButton.name}
              </button>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
