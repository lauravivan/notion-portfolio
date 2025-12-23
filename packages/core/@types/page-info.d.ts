export interface PageInfo {
  id: string;
  path: string;
  title: string;
  pages?: PageInfo[];
  parentPage?: PageInfo;
  isHomepage?: boolean;
  component: DefineComponent;
  banner: {
    path: string; //local image path
    author: string;
    link: string; // link to access image in cloud
  };
  icon: {
    path: string;
    author?: string;
    link?: string;
  };
  tags?: string[];
}
