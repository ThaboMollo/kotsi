export interface Service {
  slug: string;
  name: string;
  icon: string;
  short: string;
}

export interface PortfolioItem {
  slug: string;
  category: string;
  alt: string;
  src: string;
}

export interface Testimonial {
  name: string;
  quote: string;
  event: string;
}
