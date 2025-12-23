import PageExample from "../pages/index.vue";
import {
    createPage,
    type IMetadata,
} from "@lauravivan/notion-portfolio";

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
