export type SocialNetworkLink = {
  url: string;
  svg_path: string;
  alt: string;
};

export type PageData = {
  baseUrl: string;
  title: string;
  description?: string;
  headerSocialNetworks: SocialNetworkLink[];
};
