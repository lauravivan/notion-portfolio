import { getSettings } from "./getSettings";

export default function createPage({
  id = "",
  path = "",
  name = "",
  iconPath = "",
  bannerPath = "",
  parentPage = {} as Page,
  pages = [] as Page[],
}: Partial<Page>) {
  const page: Page = {
    id,
    bannerPath: `/banners/${bannerPath || id}.webp`,
    iconPath: `/icons/${iconPath || id}.png`,
    name,
    path: "/" + `${path || id}`,
    settings: getSettings(id),
    parentPage,
    pages,
  };

  return page;
}
