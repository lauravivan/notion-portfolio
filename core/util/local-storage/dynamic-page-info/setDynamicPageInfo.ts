import { stringify } from "flatted";
import { LOCAL_STORAGE_DYNAMIC_PAGE_INFO } from "../constants";
import type { DynamicPageInfo } from "../types";

const setDynamicPageInfo = (dynInfo: DynamicPageInfo) => {
  localStorage.setItem(LOCAL_STORAGE_DYNAMIC_PAGE_INFO, stringify(dynInfo));
};

export default setDynamicPageInfo;
