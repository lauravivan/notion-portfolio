import { LOCAL_STORAGE_TABS } from "../constants";
import { stringify } from "flatted";
import type { Tabs } from "../types";

const setTabs = (tabs: Tabs) => {
  localStorage.setItem(LOCAL_STORAGE_TABS, stringify(tabs));
};

export default setTabs;
