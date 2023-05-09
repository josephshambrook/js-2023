export type FooterLink = {
  text: string;
  href: string;
  external?: boolean;
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

export type TracksResponse = {
  name: string;
  artist: string;
  href: string;
  album: string;
  image: {
    height?: number | undefined;
    url: string;
    width?: number | undefined;
  } | null;
};

export type LocalStorageTracks = {
  datestamp: number;
  tracks: TracksResponse[];
};

export type LogoCombo =
  | "bt-bb"
  | "bt-rb"
  | "bt-yb"
  | "gt-gb"
  | "ot-ob"
  | "ot-rb"
  | "rbgt-tbgb"
  | "rt-bb"
  | "rt-rb"
  | "wt-yb"
  | "yt-yb";
