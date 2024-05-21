import { QuoteSectionProps } from "@/lib/interfaces";
import Link from "next/link";
export function QuoteSection({ data }: { readonly data: QuoteSectionProps }) {
  const {} = data;

  return (
    <div className="">
      {data && (
        <section className="lg:mx-[30%] px-6 my-24 text-center">
          <h2 className=" text-2xl font-bold mb-6">{data.heading}</h2>
          <p className=" text-gray-500 text-sm ">{data.subHeading}</p>
          <div className="my-12">
            <Link href={`http://localhost:1337${data.ctaButton.url}`}>
              <button className="btn-primary">{data.ctaButton.name}</button>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
