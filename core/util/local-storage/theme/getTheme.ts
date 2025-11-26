import { LOCAL_STORAGE_THEME } from "./constants";
import { Theme } from "@core/util";

const getTheme = (): keyof typeof Theme => {
  const theme = localStorage.getItem(LOCAL_STORAGE_THEME);

  return theme && theme in Theme
    ? (theme as keyof typeof Theme)
    : "light-theme";
};

export default getTheme;
