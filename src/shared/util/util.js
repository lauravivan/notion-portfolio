import createPage from "util/createPage";

export function isClickedElOnRefEl(refValue, clickedEle) {
  if (refValue) {
    return Array.from(refValue.querySelectorAll("*")).some(
      (child) => child === clickedEle
    );
  }
}

export function isTouchDevice() {
  return navigator.maxTouchPoints > 1;
}

export function getSubPage(handle, pageKey) {
  return getPagesInfo()[handle].pages.filter((page) => page.key === pageKey)[0];
}

export function getSubPages(pages) {
  function search(pages) {
    for (let page in pages) {
      if (Object.keys(pages[page].pages).length > 0) {
        search(pages[page].pages);
      }
    }

    return pages;
  }
  return search(pages);
}

export function getPagesInfo() {
  return JSON.parse(localStorage.getItem("pagesInfo")) || {};
}

export function createProjectSubPage(repoId, subPageKey, banner, icon) {
  const pagesInfo = getPagesInfo();

  if (pagesInfo["github"].pages[repoId]) {
    const subPage = { ...pagesInfo["github"].pages[repoId] };

    pagesInfo["projects"].pages[subPageKey] = createPage({
      key: subPageKey,
      name: subPageKey,
      icon: icon,
      banner: banner,
      path: `projects/${subPageKey}`,
      data: subPage.pageData,
    });
  }

  localStorage.setItem("pagesInfo", JSON.stringify(pagesInfo));
}
