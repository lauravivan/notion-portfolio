export interface DynamicPageInfo {
  [pageId: string]: {
    settings: Settings;
  };
}

interface Tab {
  pageId: string;
  pagePath: string;
  pageName: string;
}

export interface Settings {
  fontFamily: "font-roboto" | "font-roboto-serif" | "font-roboto-mono";
  fontSize: "font-size-default" | "font-size-small";
  pageSize: "page-default-width" | "page-full-width";
}
