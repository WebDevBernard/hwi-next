"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CompaniesSectionProps } from "@/lib/interfaces";
import Image from "next/image";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export function CompaniesSection({
  data,
  isMobile,
}: {
  readonly data: CompaniesSectionProps;
  readonly isMobile: boolean;
}) {
  return (
    <div className="bg-primary">
      {data && (
        <section className="px-6 py-8">
          <h2 className="flex px-4 justify-center items-center text-2xl font-bold">
            {data.heading}
          </h2>
          <div className="py-12">
            <Carousel
              deviceType={isMobile ? true : false}
              ssr={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              transitionDuration={500}
              infinite={true}
              className="p-[40px]"
              responsive={responsive}
            >
              {data.carousel.data.map((img) => (
                <div key={img.id}>
                  <Image
                    className="pointer-events-none"
                    alt={img.name || "None"}
                    src={`http://localhost:1337${img.url}`}
                    height={150}
                    width={150}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </section>
      )}
    </div>
  );
}
