import { LOCAL_STORAGE_ASIDE } from "../constants";

const getAsideOpen = (): boolean => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_ASIDE)!) || false;
};

export default getAsideOpen;
