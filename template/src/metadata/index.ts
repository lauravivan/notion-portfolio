import type { Component } from "vue";
import PageExample from "../pages/index.vue";
import { createPage } from "@lauravivan/notion-portfolio";

interface PageInfo {
  id: string;
  path: string;
  title: string;
  pages?: PageInfo[];
  parentPage?: PageInfo;
  isHomepage?: boolean;
  component: Component<any>;
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

interface IMetadata {
  user: {
    author: string;
    socialMedia: string;
  };
  pages: PageInfo[];
  favorites: PageInfo[];
}

const metadata: IMetadata = {
  user: {
    author: `My Portfolio`,
    socialMedia: "@user",
  },
  pages: [
    createPage({
      id: "page-example",
      title: "Hello 😊",
      isHomepage: true,
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      iconPath: "",
      component: PageExample,
    }),
  ],
  favorites: [],
};

if (metadata.pages[0]) {
  metadata.favorites.push(metadata.pages[0]);
}

export default metadata;
