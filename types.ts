export type Portfolio = {
  id: string;
  name: string;
  client: string;
  year: Number;
  description: string;
  roles: Array<string>;
  techs: Array<string>;
  slug: string;
  thumbnailPath: string;
  visitUrl: string|null;
  images: Array<string>;
};

export type Service = {
  id: string;
  name: string;
  description: string;
  icon: string;
};