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

export interface FeaturesSectionProps {
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
      shortName: string;
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
  googleMapsLink: string;
  phoneNumber: string;
  monFri: string;
  sat: string;
  sun: string;
}

export interface FooterProps {
  data: {
    tagLineHeading: string;
    tagLineSubHeading: string;
    copyright: string;
    locationHeading: string;
    addressHeading: string;
    phoneHeading: string;
    hoursHeading: string;
    hoursLocation: HoursLocationProps[];
    icon: ImageProps;
  };
}

interface ReviewProps {
  name: string;
  review: string;
}

export interface ReviewsSectionProps {
  id: number;
  __component: string;
  heading: string;
  subHeading: string;
  googleReviewHeading: {
    id: number;
    name: string;
    shortName: string;
    icon: ImageProps;
    url: string;
  };
  reviews: ReviewProps[];
}
