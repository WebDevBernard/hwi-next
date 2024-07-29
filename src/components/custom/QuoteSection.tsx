"use client";
import { QuoteSectionProps } from "@/lib/interfaces";
import { useDialog } from "@/hooks/useDialog";

export function QuoteSection({ data }: { readonly data: QuoteSectionProps }) {
  const { onOpen: onOpenDialog } = useDialog();
  return (
    <div className="flex items-center justify-center bg-primary">
      <section className="px-6 md:m-24 my-12 text-center max-w-3xl space-y-6">
        <h2 className=" text-2xl font-bold">{data.heading}</h2>
        <p className=" text-gray-500 text-sm ">{data.subHeading}</p>
        <div className="flex items-center justify-center my-12">
          <button className="btn-secondary" onClick={onOpenDialog}>
            {data.quote.name}
          </button>
        </div>
      </section>
    </div>
  );
}
