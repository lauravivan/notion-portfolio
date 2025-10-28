import { LOCAL_STORAGE_SETTINGS } from "./constants";

const getSettings = (): PagesSettings => {
  const setts = localStorage.getItem(LOCAL_STORAGE_SETTINGS);
  const settsParsed = setts ? JSON.parse(setts) : {};
  const isValidSettings = Object.keys(settsParsed).every(
    (key) => key in ["fontStyle", "smallText", "fullWidth"]
  );
  return isValidSettings ? settsParsed : {};
};

export default getSettings;
