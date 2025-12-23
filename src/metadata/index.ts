import type { IMetadata } from "@core/index";
import PageExample from "../pages/index.vue";
import PageExample2 from "../pages/page-example-2.vue";
import createPage from "@core/util/createPage";

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
     createPage({
      id: "page-example-2",
      title: "Hello 2",
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      iconPath: "",
      component: PageExample2,
    }),
  ],
  favorites: [],
};

if (metadata.pages[0]) {
  metadata.favorites.push(metadata.pages[0]);
}

export default metadata;
