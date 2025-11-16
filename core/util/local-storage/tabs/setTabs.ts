import { LOCAL_STORAGE_TABS } from "./constants";
import { stringify } from "flatted";

const setTabs = (tabs: PageInfo[]) => {
  localStorage.setItem(LOCAL_STORAGE_TABS, stringify(tabs));
};

export default setTabs;
