import { Theme } from "@core/enum";
import { LOCAL_STORAGE_THEME } from "./constants";

const setTheme = (theme: keyof typeof Theme) => {
  localStorage.setItem(LOCAL_STORAGE_THEME, theme);
};

export default setTheme;
