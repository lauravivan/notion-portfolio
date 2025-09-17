interface Page {
  id: string;
  path: string;
  name: string;
  about?: string;
  why?: string;
  considerations?: string;
  iconPath: string;
  bannerPath: string;
  ghData?: GhPortfolioRepo;
  pages?: Page[];
  more?: {
    tddLink: string;
  };
  parentPage: Page;
}
