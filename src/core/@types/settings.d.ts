interface Settings {
  fontStyle: string;
  smallText: boolean;
  fullWidth: boolean;
}

interface PagesSettings {
  [pageKey: string]: Settings;
}
