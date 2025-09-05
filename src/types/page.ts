interface Page {
  id: string;
  path: string;
  name: string;
  desc?: string;
  about?: string;
  iconPath: string;
  bannerPath: string;
  ghData?: GhPortfolioRepo;
  settings: Settings;
  pages?: Page[];
  more?: {
    tddLink: string;
  };
  parentPage: Page;
}
