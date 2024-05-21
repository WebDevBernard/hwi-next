import { FeatureSectionProps } from "@/lib/interfaces";
import Image from "next/image";
export function FeatureSection({
  data,
}: {
  readonly data: FeatureSectionProps;
}) {
  return (
    <div className="">
      {data && (
        <div className="flex-1 bg-primary">
          <div className="lg:mx-[25%] px-6 py-6 text-center">
            <h2 className=" text-2xl font-bold mb-6">{data.heading}</h2>
            <p className=" text-gray-500 text-sm ">{data.subHeading}</p>
          </div>
          <section className="container mx-auto px-6 py-12">
            <div className="grid gap-8 md:grid-cols-4">
              {data.features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex flex-col items-center text-center"
                >
                  <Image
                    alt={feature.icon.name || "None"}
                    src={`http://localhost:1337${feature.icon.url}`}
                    height={125}
                    width={125}
                  />
                  <h2 className="mb-6 text-xl font-bold">{feature.heading}</h2>
                  <p className="text-gray-500 text-sm">{feature.subHeading}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
