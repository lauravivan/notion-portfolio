import { parse } from "flatted";
import { LOCAL_STORAGE_TABS } from "./constants";
import { Page } from "@/core/@types/page";

const getTabs = (): Page[] => {
  const tabs = localStorage.getItem(LOCAL_STORAGE_TABS);
  const tabsParsed = tabs ? parse(tabs) : [];
  return Array.isArray(tabsParsed) &&
    tabsParsed.every((tab) => "id" in tab && tab.id)
    ? tabsParsed
    : [];
};

export default getTabs;
