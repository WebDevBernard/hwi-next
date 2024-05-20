export interface ImageProps {
  id: number;
  url: string;
  name: string | null;
}

export interface CarouselImageProps {
  data: ImageProps[];
}

export interface LinkProps {
  id: number;
  name: string;
  url: string;
}

export interface HeroSectionProps {
  id: number;
  __component: string;
  heading: string;
  subHeading: string;
  image: ImageProps;
  ctaButton: LinkProps[];
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
  ctaButton: LinkProps;
}

export interface CompaniesSectionProps {
  id: number;
  __component: string;
  heading: string;
  subHeading: string;
  carousel: CarouselImageProps;
}

export interface HeaderProps {
  data: {
    logoText: {
      id: number;
      text: string;
      icon: ImageProps;
      url: string;
    };
    ctaButton: {
      id: number;
      text: string;
      url: string;
    };
  };
}

export interface FooterProps {
  data: {
    logoText: {
      id: number;
      text: string;
      icon: ImageProps;
    };
    text: string;
  };
}
