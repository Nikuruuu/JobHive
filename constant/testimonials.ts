export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  comment: string;
  stars: number;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Senior Software Engineer",
    company: "Google",
    image: "/boy1.svg",
    comment:
      "JobHive transformed my career! I found my dream job at Google within just 2 weeks. The platform's smart matching system connected me with opportunities that perfectly aligned with my skills and goals.",
    stars: 5,
    featured: true,
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Product Manager",
    company: "Meta",
    image: "/boy2.svg",
    comment:
      "The quality of job postings on JobHive is exceptional. I received multiple offers from top-tier companies. The interview preparation resources were incredibly helpful too!",
    stars: 5,
    featured: true,
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "UX Designer",
    company: "Apple",
    image: "/girl1.svg",
    comment:
      "As a designer, I was looking for creative roles that matched my aesthetic vision. JobHive's detailed job descriptions and company culture insights helped me find the perfect fit at Apple.",
    stars: 5,
    featured: true,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Data Scientist",
    company: "Tesla",
    image: "/boy3.svg",
    comment:
      "The AI-powered job recommendations were spot-on! I discovered opportunities I wouldn't have found elsewhere. The application process was streamlined and professional.",
    stars: 4,
    featured: false,
  },
  {
    id: 5,
    name: "Sarah Thompson",
    role: "Marketing Director",
    company: "Samsung",
    image: "/girl2.svg",
    comment:
      "JobHive's global reach is impressive. I was able to connect with international companies and landed a role that offers remote flexibility. Highly recommended!",
    stars: 5,
    featured: true,
  },
  {
    id: 6,
    name: "James Wilson",
    role: "DevOps Engineer",
    company: "Netflix",
    image: "/boy4.svg",
    comment:
      "The technical screening process was thorough yet fair. JobHive connected me with companies that truly valued my expertise. Great platform for tech professionals!",
    stars: 4,
    featured: false,
  },
];

// Helper functions
export const getFeaturedTestimonials = (): Testimonial[] => {
  return testimonials.filter((testimonial) => testimonial.featured);
};

export const getTestimonialsByStars = (minStars: number): Testimonial[] => {
  return testimonials.filter((testimonial) => testimonial.stars >= minStars);
};

export const getRandomTestimonials = (count: number): Testimonial[] => {
  const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getAverageRating = (): number => {
  const totalStars = testimonials.reduce(
    (sum, testimonial) => sum + testimonial.stars,
    0
  );
  return Math.round((totalStars / testimonials.length) * 10) / 10;
};

export const getTotalTestimonials = (): number => {
  return testimonials.length;
};

export const getTestimonialsByCompany = (company: string): Testimonial[] => {
  return testimonials.filter((testimonial) =>
    testimonial.company.toLowerCase().includes(company.toLowerCase())
  );
};

// Star rating utility
export const renderStars = (rating: number): string => {
  const fullStars = "★".repeat(rating);
  const emptyStars = "☆".repeat(5 - rating);
  return fullStars + emptyStars;
};

// Statistics
export const getTestimonialStats = () => {
  return {
    total: getTotalTestimonials(),
    featured: getFeaturedTestimonials().length,
    averageRating: getAverageRating(),
    fiveStarCount: getTestimonialsByStars(5).length,
    companies: [...new Set(testimonials.map((t) => t.company))].length,
  };
};
