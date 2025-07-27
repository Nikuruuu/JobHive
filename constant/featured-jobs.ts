export interface FeaturedJob {
  id: string;
  companyLogo: string;
  companyName: string;
  companyAddress: string;
  jobType: "Full-time" | "Part-time" | "Contract" | "Remote" | "Hybrid";
  role: string;
  description: string;
  tags: string[];
  salaryRange: {
    min: number;
    max: number;
    currency: string;
    period: "hour" | "month" | "year";
  };
  datePosted: string;
  featured: boolean;
  urgent?: boolean;
  remote?: boolean;
}

export const FEATURED_JOBS: FeaturedJob[] = [
  {
    id: "job-001",
    companyLogo: "google",
    companyName: "Google",
    companyAddress: "Mountain View, CA",
    jobType: "Full-time",
    role: "Senior Frontend Developer",
    description:
      "Join our innovative team to build next-generation web applications using React, TypeScript, and modern frontend technologies. You'll work on products used by millions of users worldwide.",
    tags: ["React", "TypeScript", "JavaScript", "CSS", "Node.js"],
    salaryRange: {
      min: 120000,
      max: 180000,
      currency: "USD",
      period: "year",
    },
    datePosted: "2025-06-20",
    featured: true,
    remote: true,
  },
  {
    id: "job-002",
    companyLogo: "wise",
    companyName: "Wise",
    companyAddress: "London, UK",
    jobType: "Full-time",
    role: "Product Marketing Manager",
    description:
      "Lead go-to-market initiatives for innovative financial solutions. Collaborate with cross-functional teams to launch products that make international money transfers faster and more transparent.",
    tags: ["Marketing", "Fintech", "Go-to-Market", "Growth", "Strategy"],
    salaryRange: {
      min: 85000,
      max: 125000,
      currency: "USD",
      period: "year",
    },
    datePosted: "2025-07-18",
    featured: true,
    urgent: true,
  },
  {
    id: "job-003",
    companyLogo: "apple",
    companyName: "Apple",
    companyAddress: "Cupertino, CA",
    jobType: "Full-time",
    role: "UX/UI Designer",
    description:
      "Create intuitive and beautiful user experiences for millions of Apple users. Work with world-class design teams to shape the future of consumer technology.",
    tags: ["Figma", "Sketch", "Prototyping", "iOS", "Design Systems"],
    salaryRange: {
      min: 110000,
      max: 165000,
      currency: "USD",
      period: "year",
    },
    datePosted: "2025-07-22",
    featured: true,
    remote: false,
  },
  {
    id: "job-004",
    companyLogo: "salesforce",
    companyName: "Salesforce",
    companyAddress: "San Francisco, CA",
    jobType: "Full-time",
    role: "Sales Development Representative",
    description:
      "Launch your sales career with the world's #1 CRM platform. Generate new business opportunities and work with enterprise clients to drive revenue growth.",
    tags: ["Sales", "CRM", "Lead Generation", "B2B", "SaaS"],
    salaryRange: {
      min: 65000,
      max: 85000,
      currency: "USD",
      period: "year",
    },
    datePosted: "2025-07-19",
    featured: true,
    urgent: false,
  },
  {
    id: "job-005",
    companyLogo: "netflix",
    companyName: "Netflix",
    companyAddress: "Los Gatos, CA",
    jobType: "Full-time",
    role: "Data Scientist",
    description:
      "Use machine learning and analytics to enhance our recommendation algorithms and drive content strategy. Work with petabytes of data to improve user experience.",
    tags: ["Python", "Machine Learning", "SQL", "Statistics", "AWS"],
    salaryRange: {
      min: 140000,
      max: 200000,
      currency: "USD",
      period: "year",
    },
    datePosted: "2025-07-21",
    featured: true,
    remote: true,
  },
  {
    id: "job-006",
    companyLogo: "stripe",
    companyName: "Stripe",
    companyAddress: "San Francisco, CA",
    jobType: "Full-time",
    role: "Backend Engineer",
    description:
      "Build robust and scalable payment infrastructure that powers millions of businesses worldwide. Work with cutting-edge fintech and distributed systems.",
    tags: ["Java", "Scala", "Kubernetes", "Microservices", "API"],
    salaryRange: {
      min: 130000,
      max: 190000,
      currency: "USD",
      period: "year",
    },
    datePosted: "2025-06-17",
    featured: true,
    urgent: true,
  },
  {
    id: "job-007",
    companyLogo: "airbnb",
    companyName: "Airbnb",
    companyAddress: "San Francisco, CA",
    jobType: "Hybrid",
    role: "Product Manager",
    description:
      "Lead product initiatives that connect millions of hosts and guests worldwide. Drive user growth and engagement through innovative product solutions.",
    tags: ["Product Strategy", "Analytics", "User Research", "Agile", "Growth"],
    salaryRange: {
      min: 135000,
      max: 185000,
      currency: "USD",
      period: "year",
    },
    datePosted: "2025-06-23",
    featured: true,
    remote: false,
  },
  {
    id: "job-008",
    companyLogo: "shopify",
    companyName: "Shopify",
    companyAddress: "Ottawa, ON",
    jobType: "Remote",
    role: "DevOps Engineer",
    description:
      "Ensure reliable and scalable infrastructure for millions of merchants. Implement CI/CD pipelines and maintain high-availability systems for e-commerce.",
    tags: ["Docker", "AWS", "Terraform", "CI/CD", "Monitoring"],
    salaryRange: {
      min: 105000,
      max: 150000,
      currency: "USD",
      period: "year",
    },
    datePosted: "2025-07-16",
    featured: true,
    urgent: false,
  },
];

// Helper functions
export const getFeaturedJobs = (): FeaturedJob[] => {
  return FEATURED_JOBS.filter((job) => job.featured);
};

export const getUrgentJobs = (): FeaturedJob[] => {
  return FEATURED_JOBS.filter((job) => job.urgent);
};

export const getRemoteJobs = (): FeaturedJob[] => {
  return FEATURED_JOBS.filter((job) => job.remote);
};

export const getJobsByType = (
  jobType: FeaturedJob["jobType"]
): FeaturedJob[] => {
  return FEATURED_JOBS.filter((job) => job.jobType === jobType);
};

export const getJobsByCompany = (companyName: string): FeaturedJob[] => {
  return FEATURED_JOBS.filter((job) =>
    job.companyName.toLowerCase().includes(companyName.toLowerCase())
  );
};

export const getJobsByTag = (tag: string): FeaturedJob[] => {
  return FEATURED_JOBS.filter((job) =>
    job.tags.some((jobTag) => jobTag.toLowerCase().includes(tag.toLowerCase()))
  );
};

export const getJobsBySalaryRange = (
  minSalary: number,
  maxSalary: number
): FeaturedJob[] => {
  return FEATURED_JOBS.filter(
    (job) =>
      job.salaryRange.min >= minSalary && job.salaryRange.max <= maxSalary
  );
};

export const getRecentJobs = (days: number = 7): FeaturedJob[] => {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);

  return FEATURED_JOBS.filter((job) => {
    const jobDate = new Date(job.datePosted);
    return jobDate >= cutoffDate;
  });
};

export const formatSalary = (job: FeaturedJob): string => {
  const { min, max, currency, period } = job.salaryRange;

  // Function to format number with K notation
  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toString();
  };

  const currencySymbol =
    currency === "USD" ? "$" : currency === "CAD" ? "C$" : currency;
  const minFormatted = formatNumber(min);
  const maxFormatted = formatNumber(max);

  if (period === "hour") {
    return `${currencySymbol}${minFormatted}-${maxFormatted}/hr`;
  } else if (period === "month") {
    return `${currencySymbol}${minFormatted}-${maxFormatted}/mo`;
  } else {
    return `${currencySymbol}${minFormatted}-${maxFormatted}`;
  }
};

export const getRelativeDate = (datePosted: string): string => {
  const now = new Date();
  const posted = new Date(datePosted);
  const diffInDays = Math.floor(
    (now.getTime() - posted.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "Yesterday";
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  return `${Math.floor(diffInDays / 30)} months ago`;
};
