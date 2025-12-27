import type { IMetadata } from "@core/index";
import PageExample from "../pages/index.vue";
import PageExample2 from "../pages/page-example-2.vue";

const metadata: IMetadata = {
  user: {
    author: `My Portfolio`,
    socialMedia: "@user",
  },
  pages: {
    "page-example": {
      id: "page-example",
      path: "/",
      title: "Hello 😊",
      isHomepage: true,
      banner: {
        link: "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        author: "Danis Lou",
        path: "/banners/page-example.webp",
      },
      component: PageExample,
      icon: {
        author: "Paula Lee",
        path: "/icons/page-example.png",
        link: "https://www.flaticon.com/free-sticker/drink_7465398?related_id=7465398",
      },
      pages: ["page-example-2"],
    },
    "page-example-2": {
      id: "page-example-2",
      path: "/page-example-2",
      title: "Second Page",
      component: PageExample2,
      parentPage: "page-example",
      databaseInfo: {
        Created: {
          icon: "clock",
          value: "December 2025",
        },
        Languages: {
          icon: "code",
          value: ["JavaScript", "TypeScript"],
        },
      },
    },
  },
  favorites: ["page-example"],
};

export default metadata;
