import { LOCAL_STORAGE_SETTINGS } from "./constants";

const getSettings = (): Settings => {
  const setts = localStorage.getItem(LOCAL_STORAGE_SETTINGS);
  const settsParsed = setts ? JSON.parse(setts) : {};
  const isValidSettings = Object.keys(settsParsed).every(
    (key) => key in ["fontFamily", "fontSize", "pageSize"]
  );
  return isValidSettings
    ? settsParsed
    : {
        fontFamily: "font-roboto",
        fontSize: "font-size-default",
        pageSize: "page-default-width",
      };
};

export default getSettings;
