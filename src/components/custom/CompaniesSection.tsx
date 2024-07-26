"use client";

import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";
import { CompaniesSectionProps } from "@/lib/interfaces";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export function CompaniesSection({
  data,
}: {
  readonly data: CompaniesSectionProps;
}) {
  return (
    <div className="bg-primary">
      {data && (
        <section className="px-6 py-8 max-w-screen-xl mx-auto">
          <h2 className="flex px-4 justify-center items-center text-2xl font-bold">
            {data.heading}
          </h2>

          <Carousel
            className="py-12"
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            opts={{ align: "start", loop: true }}
          >
            <CarouselContent>
              {data.carousel.data.map((img) => (
                <CarouselItem
                  key={img.id}
                  className="basis-1/2 md:basis-1/3 lg:basis-1/5 flex justify-center"
                >
                  <Image
                    className="pointer-events-none"
                    alt={img.name || "None"}
                    src={`http://localhost:1337${img.url}`}
                    height={150}
                    width={150}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
      )}
    </div>
  );
}
