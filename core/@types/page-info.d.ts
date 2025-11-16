interface PageInfo {
  id: string;
  path: string;
  title: string;
  pages?: Page[];
  parentPage?: Page;
  isHomepage?: boolean;
  component: DefineComponent<{}, {}, any>;
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
}
