import { type Component } from "vue";
import type { PageInfo } from "..";

interface Page {
  id: string;
  title: string;
  parentPage?: PageInfo;
  pages?: PageInfo[];
  isHomepage?: boolean;
  iconAuthor?: string;
  iconLink?: string;
  bannerAuthor: string;
  bannerLink: string;
  component: Component;
  tags?: string[];
}

const createPage = ({
  id = "",
  title = "",
  parentPage,
  pages,
  isHomepage = false,
  component,
  bannerAuthor,
  bannerLink,
  iconAuthor,
  iconLink,
  tags,
}: Page) => {
  const page: PageInfo = {
    id,
    banner: {
      path: `/banners/${id}.webp`,
      author: bannerAuthor,
      link: bannerLink,
    },
    icon: {
      path: `/icons/${id}.png`,
      author: iconAuthor,
      link: iconLink,
    },
    title,
    path: isHomepage ? "/" : "/" + `${id}`,
    parentPage,
    pages,
    isHomepage,
    component,
    tags,
  };

  return page;
};

export default createPage;
