import { parse } from "flatted";
import { LOCAL_STORAGE_TABS } from "./constants";

const getTabs = (): PageInfo[] => {
  const tabs = localStorage.getItem(LOCAL_STORAGE_TABS);
  const tabsParsed = tabs ? parse(tabs) : [];
  return Array.isArray(tabsParsed) &&
    tabsParsed.every((tab) => "id" in tab && tab.id)
    ? tabsParsed
    : [];
};

export default getTabs;
