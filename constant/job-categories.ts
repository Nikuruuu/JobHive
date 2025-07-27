export interface JobCategory {
  id: string;
  title: string;
  description: string;
  icon?: string;
  jobCount?: number;
  featured?: boolean;
}

export const JOB_CATEGORIES: JobCategory[] = [
  {
    id: "engineering",
    title: "Engineering",
    description:
      "Build the future with cutting-edge technology and innovative solutions.",
    icon: "HardHat",
    jobCount: 1250,
    featured: true,
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Drive growth and connect brands with their perfect audience.",
    icon: "Megaphone",
    jobCount: 850,
    featured: true,
  },
  {
    id: "design",
    title: "Design",
    description: "Create stunning visuals and user experiences that inspire.",
    icon: "Palette",
    jobCount: 620,
    featured: true,
  },
  {
    id: "sales",
    title: "Sales",
    description:
      "Turn relationships into revenue and exceed ambitious targets.",
    icon: "TrendingUp",
    jobCount: 940,
    featured: true,
  },
  {
    id: "finance",
    title: "Finance",
    description:
      "Shape financial strategies and drive smart business decisions.",
    icon: "Calculator",
    jobCount: 480,
    featured: true,
  },
  {
    id: "hr",
    title: "Human Resources",
    description: "Empower teams and build exceptional workplace cultures.",
    icon: "Users",
    jobCount: 320,
    featured: true,
  },
  {
    id: "data-science",
    title: "Data Science",
    description:
      "Unlock insights from data to predict trends and solve problems.",
    icon: "ChartColumnBig",
    jobCount: 560,
    featured: true,
  },
  {
    id: "product-management",
    title: "Product Management",
    description: "Lead product vision and bring game-changing ideas to life.",
    icon: "Lightbulb",
    jobCount: 280,
    featured: true,
  },
];

// Helper functions
export const getFeaturedCategories = (): JobCategory[] => {
  return JOB_CATEGORIES.filter((category) => category.featured);
};

export const getAllCategories = (): JobCategory[] => {
  return JOB_CATEGORIES;
};

export const getCategoryById = (id: string): JobCategory | undefined => {
  return JOB_CATEGORIES.find((category) => category.id === id);
};

export const getCategoriesByJobCount = (
  minCount: number = 0
): JobCategory[] => {
  return JOB_CATEGORIES.filter(
    (category) => (category.jobCount || 0) >= minCount
  );
};
