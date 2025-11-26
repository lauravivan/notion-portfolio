import { Theme } from "@core/util";
import { LOCAL_STORAGE_THEME } from "./constants";

const setTheme = (theme: keyof typeof Theme) => {
  localStorage.setItem(LOCAL_STORAGE_THEME, theme);
};

export default setTheme;
