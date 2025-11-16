import { LOCAL_STORAGE_SETTINGS } from "./constants";

const setSettings = (settings: PagesSettings) => {
  localStorage.setItem(LOCAL_STORAGE_SETTINGS, JSON.stringify(settings));
}

export default setSettings;