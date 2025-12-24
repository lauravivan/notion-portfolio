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
  bannerAuthor?: string;
  bannerLink?: string;
  component: Component;
  tags?: string[];
  hasIcon?: boolean;
  hasBanner?: boolean;
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
  hasIcon = true,
  hasBanner = true,
}: Page) => {
  const page: PageInfo = {
    id,
    title,
    path: isHomepage ? "/" : "/" + `${id}`,
    parentPage,
    pages,
    isHomepage,
    component,
    tags,
  };

  if (hasBanner) {
    page.banner = {
      path: `/banners/${id}.webp`,
      author: bannerAuthor,
      link: bannerLink,
    };
  }

  if (hasIcon) {
    page.icon = {
      path: `/icons/${id}.png`,
      author: iconAuthor,
      link: iconLink,
    };
  }

  return page;
};

export default createPage;
