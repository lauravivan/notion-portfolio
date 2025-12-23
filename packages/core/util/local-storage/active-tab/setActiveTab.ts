import { LOCAL_STORAGE_ACTIVE_TAB } from "../constants";

const setActiveTab = (activeTab: number) => {
  localStorage.setItem(LOCAL_STORAGE_ACTIVE_TAB, JSON.stringify(activeTab));
};

export default setActiveTab;
