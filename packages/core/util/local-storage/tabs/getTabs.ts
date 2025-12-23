import { parse } from "flatted";
import { LOCAL_STORAGE_TABS } from "../constants";
import type { Tab } from "../types";

const getTabs = (): Tab[] => {
  const tabs = localStorage.getItem(LOCAL_STORAGE_TABS);
  return tabs ? parse(tabs) : [];
};

export default getTabs;
