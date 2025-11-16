import { DefineComponent } from "vue";

interface Page {
  id: string;
  path: string;
  title: string;
  pages?: Page[];
  parentPage?: Page;
  isHomepage?: boolean;
  component: DefineComponent<{}, {}, any>
  banner: {
    path: string;
    author: string;
    link: string;
  },
  icon: {
    path: string;
    author?: string;
    link?: string;
  }
}
