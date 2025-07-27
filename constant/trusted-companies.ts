export interface TrustedCompany {
  id: string;
  name: string;
  logo: string;
  country: string;
  industry: string;
  openPositions: number;
  featured: boolean;
  description?: string;
}

export const TRUSTED_COMPANIES: TrustedCompany[] = [
  {
    id: "google",
    name: "Google",
    logo: "google",
    country: "United States",
    industry: "Technology",
    openPositions: 1250,
    featured: true,
    description: "Leading technology company driving innovation worldwide",
  },
  {
    id: "panasonic",
    name: "Panasonic",
    logo: "panasonic",
    country: "Japan",
    industry: "Electronics",
    openPositions: 980,
    featured: true,
    description: "Global leader in electronics and technology solutions",
  },
  {
    id: "moneygram",
    name: "MoneyGram",
    logo: "moneygram",
    country: "United States",
    industry: "Technology",
    openPositions: 750,
    featured: true,
    description: "Innovative consumer electronics and software solutions",
  },
  {
    id: "samsung",
    name: "Samsung",
    logo: "samsung",
    country: "South Korea",
    industry: "Electronics",
    openPositions: 2100,
    featured: true,
    description: "Global technology conglomerate and innovation leader",
  },
  {
    id: "meta",
    name: "Meta",
    logo: "meta",
    country: "United States",
    industry: "Social Media",
    openPositions: 650,
    featured: true,
    description: "Building the next evolution of social technology",
  },
  {
    id: "tesla",
    name: "Tesla",
    logo: "tesla",
    country: "United States",
    industry: "Automotive",
    openPositions: 850,
    featured: true,
    description: "Accelerating the world's transition to sustainable energy",
  },
  {
    id: "netflix",
    name: "Netflix",
    logo: "netflix",
    country: "United States",
    industry: "Entertainment",
    openPositions: 420,
    featured: false,
    description: "Entertainment streaming service loved by millions",
  },
  {
    id: "spotify",
    name: "Spotify",
    logo: "spotify",
    country: "Sweden",
    industry: "Music",
    openPositions: 380,
    featured: false,
    description: "Audio streaming and media services provider",
  },
  {
    id: "stripe",
    name: "Stripe",
    logo: "stripe",
    country: "United States",
    industry: "Fintech",
    openPositions: 320,
    featured: false,
    description: "Online payment processing for internet businesses",
  },
  {
    id: "airbnb",
    name: "Airbnb",
    logo: "airbnb",
    country: "United States",
    industry: "Travel",
    openPositions: 290,
    featured: false,
    description: "Belong anywhere with unique travel experiences",
  },
  {
    id: "uber",
    name: "Uber",
    logo: "uber",
    country: "United States",
    industry: "Transportation",
    openPositions: 520,
    featured: false,
    description: "Transportation and delivery technology platform",
  },
  {
    id: "slack",
    name: "Slack",
    logo: "slack",
    country: "United States",
    industry: "Communication",
    openPositions: 180,
    featured: false,
    description: "Business communication platform for teams",
  },
  {
    id: "shopify",
    name: "Shopify",
    logo: "shopify",
    country: "Canada",
    industry: "E-commerce",
    openPositions: 450,
    featured: false,
    description: "Commerce platform for online stores and retail",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    logo: "salesforce",
    country: "United States",
    industry: "CRM",
    openPositions: 680,
    featured: false,
    description: "Customer relationship management solutions",
  },
  {
    id: "sony",
    name: "Sony",
    logo: "sony",
    country: "Japan",
    industry: "Electronics",
    openPositions: 340,
    featured: false,
    description: "Entertainment and technology innovation company",
  },
  {
    id: "adobe",
    name: "Adobe",
    logo: "adobe",
    country: "United States",
    industry: "Software",
    openPositions: 480,
    featured: false,
    description: "Digital media and marketing solutions",
  },
  {
    id: "zoom",
    name: "Zoom",
    logo: "zoom",
    country: "United States",
    industry: "Communication",
    openPositions: 220,
    featured: false,
    description: "Video communications platform",
  },
  {
    id: "github",
    name: "GitHub",
    logo: "github",
    country: "United States",
    industry: "Developer Tools",
    openPositions: 160,
    featured: false,
    description: "Development platform for code collaboration",
  },
  {
    id: "figma",
    name: "Figma",
    logo: "figma",
    country: "United States",
    industry: "Design",
    openPositions: 120,
    featured: false,
    description: "Collaborative design and prototyping platform",
  },
  {
    id: "notion",
    name: "Notion",
    logo: "notion",
    country: "United States",
    industry: "Productivity",
    openPositions: 95,
    featured: true,
    description: "All-in-one workspace for notes and collaboration",
  },
];

// Helper functions
export const getFeaturedCompanies = (): TrustedCompany[] => {
  return TRUSTED_COMPANIES.filter((company) => company.featured);
};

export const getAllTrustedCompanies = (): TrustedCompany[] => {
  return TRUSTED_COMPANIES;
};

export const getCompaniesByIndustry = (industry: string): TrustedCompany[] => {
  return TRUSTED_COMPANIES.filter((company) =>
    company.industry.toLowerCase().includes(industry.toLowerCase())
  );
};

export const getCompaniesByCountry = (country: string): TrustedCompany[] => {
  return TRUSTED_COMPANIES.filter((company) =>
    company.country.toLowerCase().includes(country.toLowerCase())
  );
};

export const getCompanyById = (id: string): TrustedCompany | undefined => {
  return TRUSTED_COMPANIES.find((company) => company.id === id);
};

export const getTopHiringCompanies = (limit: number = 10): TrustedCompany[] => {
  return [...TRUSTED_COMPANIES]
    .sort((a, b) => b.openPositions - a.openPositions)
    .slice(0, limit);
};

export const getRandomCompanies = (count: number = 6): TrustedCompany[] => {
  const shuffled = [...TRUSTED_COMPANIES].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getTotalOpenPositions = (): number => {
  return TRUSTED_COMPANIES.reduce(
    (total, company) => total + company.openPositions,
    0
  );
};

// Industry and country stats
export const getIndustryStats = () => {
  const industries = [...new Set(TRUSTED_COMPANIES.map((c) => c.industry))];
  return industries.map((industry) => ({
    industry,
    count: getCompaniesByIndustry(industry).length,
    totalPositions: getCompaniesByIndustry(industry).reduce(
      (sum, company) => sum + company.openPositions,
      0
    ),
  }));
};

export const getCountryStats = () => {
  const countries = [...new Set(TRUSTED_COMPANIES.map((c) => c.country))];
  return countries.map((country) => ({
    country,
    count: getCompaniesByCountry(country).length,
    totalPositions: getCompaniesByCountry(country).reduce(
      (sum, company) => sum + company.openPositions,
      0
    ),
  }));
};
