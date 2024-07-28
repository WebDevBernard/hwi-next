import { getHomePageData } from "@/data/loaders";
import { HeroSection } from "@/components/custom/HeroSection";
import { FeatureSection } from "@/components/custom/FeatureSection";
import { QuoteSection } from "@/components/custom/QuoteSection";
import { CarouselSection } from "@/components/custom/CarouselSection";
import { v4 as uuidv4 } from "uuid";
function blockRenderer(block: any) {
  switch (block.__component) {
    case "layout.hero-section":
      return <HeroSection key={uuidv4()} data={block} />;
    case "layout.features-section":
      return <FeatureSection key={uuidv4()} data={block} />;
    case "layout.quote-section":
      return <QuoteSection key={uuidv4()} data={block} />;
    case "layout.companies-section":
      return <CarouselSection key={uuidv4()} data={block} />;
    default:
      return null;
  }
}

export default async function Home() {
  const strapiData = await getHomePageData();

  const { blocks } = strapiData;

  if (!blocks) return <p>Problem loading Strapi</p>;

  return <main>{blocks.map(blockRenderer)}</main>;
}
