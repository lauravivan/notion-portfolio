import { parse } from "flatted";
import { LOCAL_STORAGE_DYNAMIC_PAGE_INFO } from "../constants";
import type { DynamicPageInfo } from "../types";

const getDynamicPageInfo = (): DynamicPageInfo => {
  const dynInfo = localStorage.getItem(LOCAL_STORAGE_DYNAMIC_PAGE_INFO);
  return dynInfo ? parse(dynInfo) : {};
};

export default getDynamicPageInfo;
