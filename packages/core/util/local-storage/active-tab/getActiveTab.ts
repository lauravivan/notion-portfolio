import { LOCAL_STORAGE_ACTIVE_TAB } from "../constants";

const getActiveTab = (): number => {
  const activeTab = localStorage.getItem(LOCAL_STORAGE_ACTIVE_TAB);
  const parsedActiveTab = activeTab ? parseInt(activeTab) : 0;
  return isNaN(parsedActiveTab) ? 0 : parsedActiveTab;
};

export default getActiveTab;
