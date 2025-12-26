import type { IMetadata } from "@core/index";
import PageExample from "../pages/index.vue";
import PageExample2 from "../pages/page-example-2.vue";
import createPage from "@core/util/createPage";

const metadata: IMetadata = {
  user: {
    author: `My Portfolio`,
    socialMedia: "@user",
  },
  pages: {
    "page-example": createPage({
      id: "page-example",
      title: "Hello 😊",
      isHomepage: true,
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      component: PageExample,
      iconAuthor: "Paula Lee",
      iconLink:
        "https://www.flaticon.com/free-sticker/drink_7465398?related_id=7465398",
      pages: ["page-example-8"],
    }),
    "page-example-8": createPage({
      id: "page-example-8",
      title: "Hello 2",
      component: PageExample2,
      hasBanner: false,
      hasIcon: false,
      parentPage: "page-example",
      pages: ["page-example-9"]
    }),
    "page-example-9": createPage({
      id: "page-example-9",
      title: "Hello 2",
      component: PageExample2,
      hasBanner: false,
      hasIcon: false,
      parentPage: "page-example-8",
    }),
    "page-example-13": createPage({
      id: "page-example-13",
      title:
        "Hello 2 dsfasdfsadfdsafsdfasfasdfsadfasfsafsdfsfsafdasfassdfasdfsadfsdfdsfsdfsdfsdfsfsdfdsfdsfdsfssdfsdfsdfsdfsdfdfsfs",
      component: PageExample2,
      hasBanner: false,
      hasIcon: false,
    }),
  },
  favorites: ["page-example", "page-example-8"],
};

export default metadata;
