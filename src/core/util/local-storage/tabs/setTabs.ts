import { Page } from "@/core/@types/page";
import { LOCAL_STORAGE_TABS } from "./constants";
import { stringify } from "flatted";

const setTabs = (tabs: Page[]) => {
  localStorage.setItem(LOCAL_STORAGE_TABS, stringify(tabs));
}

export default setTabs;