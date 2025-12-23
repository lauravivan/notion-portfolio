import { LOCAL_STORAGE_TABS } from "../constants";
import { stringify } from "flatted";
import type { Tab } from "../types";

const setTabs = (tabs: Tab[]) => {
  localStorage.setItem(LOCAL_STORAGE_TABS, stringify(tabs));
};

export default setTabs;
