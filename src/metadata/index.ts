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
      pages: ["page-example-8"],
    },
    "page-example-8": {
      id: "page-example-8",
      path: "/page-example-8",
      title: "Hello 2",
      component: PageExample2,
      parentPage: "page-example",
      pages: ["page-example-9"],
      databaseInfo: {
        Created: {
          icon: "clock",
          value: "December 2025",
        },
        Languages: {
          icon: 'code',
          value: ["Vue.js", "Next.js"]
        }
      },
    },
    "page-example-9": {
      id: "page-example-9",
      path: "/page-example-9",
      title: "Hello 2",
      component: PageExample2,
      parentPage: "page-example-8",
    },
    "page-example-13": {
      id: "page-example-13",
      path: "/page-example-13",
      title:
        "Hello 2 dsfasdfsadfdsafsdfasfasdfsadfasfsafsdfsfsafdasfassdfasdfsadfsdfdsfsdfsdfsdfsfsdfdsfdsfdsfssdfsdfsdfsdfsdfdfsfs",
      component: PageExample2,
    },
  },
  favorites: ["page-example", "page-example-8"],
};

export default metadata;
