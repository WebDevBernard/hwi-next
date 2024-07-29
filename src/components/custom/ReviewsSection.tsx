import { ReviewsSectionProps } from "@/lib/interfaces";
import Image from "next/image";
import { LucideStar } from "lucide-react";
import { LucideStarHalf } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { v4 as uuidv4 } from "uuid";
const StarIcon = ({ isHalf }: { isHalf?: boolean }) =>
  isHalf ? (
    <LucideStarHalf fill="red" strokeWidth={0} />
  ) : (
    <LucideStar fill="red" strokeWidth={0} />
  );

export function ReviewsSection({
  data,
}: {
  readonly data: ReviewsSectionProps;
}) {
  return (
    <div className="flex items-center justify-center">
      <section className="px-6 md:m-24 my-12 text-center max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold">{data.heading}</h2>
        <p className=" text-gray-500 text-sm ">{data.subHeading}</p>

        <div className="flex gap-2 items-center justify-center">
          <Image
            className="w-auto h-auto"
            alt={data.googleReviewHeading.name || "None"}
            src={`http://localhost:1337${data.googleReviewHeading.icon.url}`}
            height={75}
            width={75}
          />
          <h2 className="text-slate-800 font-bold text-sm">
            {data.googleReviewHeading.shortName}
          </h2>
          <span className="flex">
            {Array.from({ length: 4 }).map(() => (
              <StarIcon key={uuidv4()} />
            ))}
            <StarIcon isHalf />
          </span>
          <span className="flex items-center gap-1">
            <h2 className="text-slate-800 font-bold text-sm">4.6</h2>
            <h2 className="text-slate-800 text-sm">Rating</h2>
          </span>
          <span className="flex items-center gap-1">
            <h2 className="text-slate-800 font-bold text-sm">28</h2>
            <h2 className="text-slate-800 text-sm">Reviews</h2>
          </span>
        </div>
        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
          {(data.reviews || []).map((review) => (
            <div
              className="relative text-left rounded-md min-w-[200px] border-[1px] border-slate-100 p-4"
              key={uuidv4()}
            >
              <h2 className="text-sm text-slate-800 font-bold mb-4">
                {review.name}
              </h2>
              <p className="text-sm text-gray-500 mb-8">{review.review}</p>
              <p className="absolute bottom-0 right-0 p-2 text-sm text-gray-500 ">
                2 days ago
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
