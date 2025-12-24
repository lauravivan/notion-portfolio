import PageExample from "../pages/index.vue";
import { createPage, type IMetadata } from "@lauravivan/notion-portfolio";

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
      component: PageExample,
      iconAuthor: "Paula Lee",
      iconLink: "https://www.flaticon.com/free-sticker/drink_7465398?related_id=7465398"
    }),
  ],
  favorites: [],
};

metadata.favorites.push(metadata.pages[0]);

export default metadata;
