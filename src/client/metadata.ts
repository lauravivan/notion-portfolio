import defaultIcons from "@/core/assets/img/default-icons";
import PageExample from "@/client/pages/PageExample.vue";
import createPage from "@/core/util/createPage";

const metadata = {
  user: {
    author: `Laura Vivan's Portfolio`,
    socialMedia: "@lauravivan",
  },
  pages: [
    createPage({
      id: "page-example",
      title: "Hello 😊",
      isHomepage: true,
      bannerAuthor: "Danis Lou",
      bannerLink:
        "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      iconPath: defaultIcons.eating,
      component: PageExample,
    }),
  ],
};

export default metadata;
