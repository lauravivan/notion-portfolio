import { Theme } from "@/types/theme";

const LOCAL_STORAGE_SETTINGS = "arual-portfolio-settings";
const LOCAL_STORAGE_ACTIVE_TAB = "arual-portfolio-active-tab";
const LOCAL_STORAGE_TABS = "arual-portfolio-tabs";
const LOCAL_STORAGE_THEME = "arual-portfolio-theme";

export function getSettingsLS(): SettingsLocalStorage {
  const setts = localStorage.getItem(LOCAL_STORAGE_SETTINGS);

  if (setts) {
    return JSON.parse(setts);
  }

  return {};
}

export function setSettingsLS(settings: SettingsLocalStorage) {
  localStorage.setItem(LOCAL_STORAGE_SETTINGS, JSON.stringify(settings));
}

export function getActiveTabLS(): number {
  const activeTab = localStorage.getItem(LOCAL_STORAGE_ACTIVE_TAB);

  if (activeTab) {
    return parseInt(activeTab);
  }

  return 0;
}

export function setActiveTabLS(activeTab: number) {
  localStorage.setItem(LOCAL_STORAGE_ACTIVE_TAB, JSON.stringify(activeTab));
}

export function getTabsLS(): Page[] {
  const tabs = localStorage.getItem(LOCAL_STORAGE_TABS);

  if (tabs) {
    return JSON.parse(tabs);
  }

  return [];
}

export function setTabsLS(tabs: Page[]) {
  localStorage.setItem(LOCAL_STORAGE_TABS, JSON.stringify(tabs));
}

export function getThemeLS(): Theme {
  const theme = localStorage.getItem(LOCAL_STORAGE_THEME) as Theme;

  if (theme) return theme;

  return "light-theme";
}

export function setThemeLS(theme: Theme) {
  localStorage.setItem(LOCAL_STORAGE_THEME, theme);
}
