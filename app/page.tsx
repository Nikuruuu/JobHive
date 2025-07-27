import FeaturedJobs from "@/components/sections/featured-jobs";
import Footer from "@/components/sections/footer";
import HereSection from "@/components/sections/hero-section";
import JobCategories from "@/components/sections/job-categories";
import PostJob from "@/components/sections/post-job";
import ReadyFindJob from "@/components/sections/readyFindJob";
import Testimonials from "@/components/sections/testimonials";
import TrustedCompanies from "@/components/sections/trusted-companies";
import React from "react";

function page() {
  return (
    <main className="min-h-screen">
      <HereSection />
      <JobCategories />
      <FeaturedJobs />
      <TrustedCompanies />
      <PostJob />
      <Testimonials />
      <ReadyFindJob />
      <Footer />
    </main>
  );
}

export default page;
