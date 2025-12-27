export interface PageInfo {
  id: string;
  path: string;
  title: string;
  pages?: string[];
  parentPage?: string;
  isHomepage?: boolean;
  component: Component;
  banner?: {
    path: string; //local image path
    author?: string;
    link?: string; // link to access image in cloud
  };
  icon?: {
    path: string;
    author?: string;
    link?: string;
  };
  databaseInfo?: {
    [key: string]: {
      icon: "clock" | "check" | "code";
      value: string | string[];
    };
  };
}

export interface PagesInfo {
  [id: string]: PageInfo;
}

export interface IMetadata {
  user: {
    author: string;
    socialMedia: string;
  };
  pages: PagesInfo;
  favorites: string[];
}
