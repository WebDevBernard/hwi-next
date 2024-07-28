"use client";
import { v4 as uuidv4 } from "uuid";
import { CarouselSectionProps } from "@/lib/interfaces";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export function CarouselSection({
  data,
}: {
  readonly data: CarouselSectionProps;
}) {
  return (
    <div className="pb-12 bg-primary">
      {data && (
        <section className="py-6 max-w-screen-xl mx-auto">
          <h2 className="flex mb-12 justify-center items-center text-2xl font-bold">
            {data.heading}
          </h2>

          <Carousel
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
                  key={uuidv4()}
                  className="basis-1/2 md:basis-1/3 lg:basis-1/5 flex justify-center relative w-full h-[80px] select-none"
                >
                  <Image
                    fill
                    sizes="150px"
                    className="pointer-events-none object-contain"
                    alt={img.name || "None"}
                    src={`http://localhost:1337${img.url}`}
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
