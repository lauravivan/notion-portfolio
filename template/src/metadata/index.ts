import PageExample from "../pages/index.vue";
import { type IMetadata } from "@lauravivan/notion-portfolio";

const metadata: IMetadata = {
  user: {
    author: `My Portfolio`,
    socialMedia: "@user",
  },
  pages: {
    "page-example": {
      id: "page-example",
      title: "Hello 😊",
      isHomepage: true,
      banner: {
        author: "Danis Lou",
        path: "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      },
      icon: {
        author: "Paula Lee",
        path: "https://www.flaticon.com/free-sticker/drink_7465398?related_id=7465398",
      },
      component: PageExample,
    },
  },
  favorites: ["page-example"],
};

export default metadata;
