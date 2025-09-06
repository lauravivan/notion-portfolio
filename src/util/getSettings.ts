import { getSettingsLS } from "./localStorage";

export function getSettings(pageId: string): Settings {
  const settings = getSettingsLS();

  if (settings && settings[pageId]) {
    return settings[pageId];
  }

  return {
    fontStyle: "font-roboto",
    fullWidth: false,
    smallText: false,
  };
}
