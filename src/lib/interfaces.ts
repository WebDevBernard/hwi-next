interface ImageProps {
  id: number;
  url: string;
  name: string | null;
}

interface LinkProps {
  id: number;
  name: string;
  url: string;
}

interface QuoteProps {
  id: number;
  name: string;
}

export interface HeroSectionProps {
  id: number;
  __component: string;
  heading: string;
  subHeading: string;
  image: ImageProps;
  quote: QuoteProps;
  location: LinkProps;
}

export interface FeatureProps {
  id: number;
  heading: string;
  subHeading: string;
  icon: ImageProps;
}

export interface FeatureSectionProps {
  id: number;
  __component: string;
  heading: string;
  subHeading: string;
  features: FeatureProps[];
}

export interface QuoteSectionProps {
  id: number;
  __component: string;
  heading: string;
  subHeading: string;
  quote: QuoteProps;
}

export interface CarouselSectionProps {
  id: number;
  __component: string;
  heading: string;
  subHeading: string;
  carousel: { data: ImageProps[] };
}

export interface HeaderProps {
  data: {
    logoText: {
      id: number;
      name: string;
      icon: ImageProps;
      url: string;
    };
    quote: QuoteProps;
  };
}

export interface MenuProps {
  menu: {
    id: number;
    title: string;
    subMenuHeadings: {
      id: number;
      name: string;
      url: string;
    }[];
  }[];
}

interface HoursLocationProps {
  id: number;
  locationName: string;
  address: string;
  phoneNumber: string;
  monFri: string;
  sat: string;
  sun: string;
}

export interface FooterProps {
  data: {
    heading: string;
    subHeading: string;
    copyright: string;
    locationHeading: string;
    hoursLocation: HoursLocationProps[];
    icon: ImageProps;
  };
}
