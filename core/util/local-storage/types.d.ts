export interface DynamicPageInfo {
  [pageId: string]: {
    settings: {
      fontFamily: "font-roboto" | "font-roboto-serif" | "font-roboto-mono";
      fontSize: "font-size-default" | "font-size-small";
      pageSize: "page-default-width" | "page-full-width";
    };
  };
}

interface Tab {
  pageId: string;
  pagePath: string;
  pageName: string;
}

export interface Tabs extends Array<Tab> {}
