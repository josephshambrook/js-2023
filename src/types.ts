export type FooterLink = {
  text: string;
  href: string;
};

export type FooterSection = {
  heading: string;
  links: FooterLink[];
};

export type SiteMetadata = {
  title: string;
  subtitle?: string;
  description: string;
  permalink: string;
};
