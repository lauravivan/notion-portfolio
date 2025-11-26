import { type DefineComponent } from "vue";

const createPage = ({
  id = "",
  title = "",
  parentPage,
  pages,
  isHomepage = false,
  component,
  bannerAuthor,
  bannerLink,
  iconPath,
  iconAuthor,
  iconLink,
}: {
  id: string;
  title: string;
  parentPage?: PageInfo;
  pages?: PageInfo[];
  isHomepage: boolean;
  iconPath: string;
  iconAuthor?: string;
  iconLink?: string;
  bannerAuthor: string;
  bannerLink: string;
  component: DefineComponent<{}, {}, any>;
}) => {
  const page: PageInfo = {
    id,
    banner: {
      path: `/banners/${id}.webp`,
      author: bannerAuthor,
      link: bannerLink,
    },
    icon: {
      path: `${iconPath}`,
      author: iconAuthor,
      link: iconLink,
    },
    title,
    path: isHomepage ? "/" : "/" + `${id}`,
    parentPage,
    pages,
    isHomepage,
    component,
  };

  return page;
};

export default createPage;
