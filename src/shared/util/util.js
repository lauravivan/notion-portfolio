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

export const requestDateTime = localStorage.getItem("requestDateTime") || "";

export function setRequestDateTime(value) {
  localStorage.setItem("requestDateTime", value);
}

export const pagesInfo = JSON.parse(localStorage.getItem("pagesInfo")) || {};

export function setPagesInfo(pagesInfo) {
  localStorage.setItem("pagesInfo", JSON.stringify(pagesInfo));
}

export const tabs = JSON.parse(localStorage.getItem("tabs")) || [];

export function setTabs(tabs) {
  localStorage.setItem("tabs", JSON.stringify(tabs));
}

export const activeTab = localStorage.getItem("activeTab");

export function setActiveTab(index) {
  localStorage.setItem("activeTab", index);
}

export function getSubPage(handle, pageKey) {
  return pagesInfo[handle].pages.filter((page) => page.key === pageKey)[0];
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
