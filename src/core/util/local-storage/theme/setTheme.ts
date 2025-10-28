import { Theme } from "@/core/@types/theme";
import { LOCAL_STORAGE_THEME } from "./constants";

const setTheme = (theme: Theme) => {
  localStorage.setItem(LOCAL_STORAGE_THEME, theme);
}

export default setTheme;