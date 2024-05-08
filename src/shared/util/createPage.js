import { getPagesInfo } from "util/util";

function getSettings(pageKey) {
  function search(pages) {
    for (let page in pages) {
      if (pageKey == pages[page].key) {
        return pages[page];
      }

      const result = search(pages[page].pages);

      if (result) {
        return result;
      }
    }
  }

  const pagesInfo = getPagesInfo();
  const result = search(pagesInfo);

  if (result) {
    if (Object.keys(result).includes("pageSettings")) {
      return result.pageSettings;
    }
  }

  return {
    fontStyle: "font-roboto",
    fontSize: "",
    pageWidth: "",
  };
}

export default function createPage({
  key = "",
  path = "",
  name = "",
  icon = "",
  banner = "",
  props = "",
  data = "",
}) {
  return {
    key: key,
    pagePath: "/" + path,
    pageName: name,
    pageIcon: `/${icon}`,
    pageBanner: banner ? `/banner/${banner}` : "",
    pageId: key + "-page",
    pageProps: props,
    pageData: data,
    pageSettings: getSettings(key),
    pages: {},
  };
}
