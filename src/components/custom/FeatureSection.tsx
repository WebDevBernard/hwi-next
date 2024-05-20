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
        <div className="flex-1 bg-[#f2f1ee]">
          <h1 className="flex px-4 py-12 justify-center items-center text-2xl font-bold ">
            {data.heading}
          </h1>
          <p className="flex mx-[30%] px-4  justify-center items-center text-sm text-center">
            {data.subHeading}
          </p>

          <section className="container mx-auto md:px-6 lg:py-12">
            <div className="grid gap-8 md:grid-cols-4">
              {data.features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex flex-col mx-[20%] items-center text-center"
                >
                  <Image
                    alt={feature.icon.name || "None"}
                    src={`http://localhost:1337${feature.icon.url}`}
                    height={125}
                    width={125}
                  />
                  <h2 className="mb-4 text-xl font-bold">{feature.heading}</h2>
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
