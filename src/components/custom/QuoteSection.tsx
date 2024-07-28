"use client";
import { QuoteSectionProps } from "@/lib/interfaces";
import { useDialog } from "@/hooks/useDialog";

export function QuoteSection({ data }: { readonly data: QuoteSectionProps }) {
  const { onOpen: onOpenDialog } = useDialog();
  return (
    <div className="flex items-center justify-center">
      <section className="lg:mx-[30%] px-6 m-24 text-center max-w-3xl space-y-6">
        <h2 className=" text-2xl font-bold">{data.heading}</h2>
        <p className=" text-gray-500 text-sm ">{data.subHeading}</p>
        <div className="my-12">
          <button className="btn-secondary" onClick={onOpenDialog}>
            {data.quote.name}
          </button>
        </div>
      </section>
    </div>
  );
}
