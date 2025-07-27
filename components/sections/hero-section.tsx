import React from "react";
import { BriefcaseBusiness, Map, Search } from "lucide-react";

import { JobHiveNavbar } from "../common/navBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LottieHero from "../common/lottie-hero"; // Adjust the path as necessary

function HereSection() {
  return (
    <div>
      <JobHiveNavbar />

      <div className="min-h-screen lg:min-h-[100vh] flex items-center justify-center pt-16 lg:pt-0">
        {/* Hero Content */}
        <div className="container mx-auto px-4 w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center justify-items-center min-h-[70vh]">
            {/* Left Section - Lottie Animation */}
            <div className="hidden lg:flex justify-center items-center order-1 lg:order-1">
              <div className="w-full max-w-md lg:max-w-lg">
                <div className="flex justify-center items-center">
                  <LottieHero />
                </div>
              </div>
            </div>

            {/* Right Section - Text Content */}
            <div className="space-y-6 lg:space-y-8 flex flex-col justify-center items-start order-2 lg:order-2">
              {/* Heading */}
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Join Us and Unlock Your{" "}
                  <span className="text-primary">Future</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                  Explore Thousands of Job Opportunities
                </h2>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Discover your next career move with top employers. Find jobs
                  that match your passion, skills, and ambition.
                </p>
              </div>

              {/* Search Bar */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 p-2 bg-background rounded-lg shadow-sm border border-border/50">
                  <div className="flex-1 relative">
                    <BriefcaseBusiness className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                    <Input
                      type="text"
                      placeholder="Job title or keywords"
                      className="border-0 shadow-none focus-visible:ring-0 text-base pl-10 h-12"
                    />
                  </div>
                  {/* Vertical Divider */}
                  <div className="hidden sm:flex items-center">
                    <div className="w-px h-8 bg-border"></div>
                  </div>

                  <div className="flex-1 relative">
                    <Map className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                    <Input
                      type="text"
                      placeholder="Location"
                      className="border-0 shadow-none focus-visible:ring-0 text-base pl-10 h-12"
                    />
                  </div>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12"
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Search Jobs
                  </Button>
                </div>

                {/* Popular Searches */}
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="text-muted-foreground">
                    Popular searches:
                  </span>
                  <button className="text-primary hover:underline">
                    Frontend Developer
                  </button>
                  <span className="text-muted-foreground">•</span>
                  <button className="text-primary hover:underline">
                    Marketing Manager
                  </button>
                  <span className="text-muted-foreground">•</span>
                  <button className="text-primary hover:underline">
                    Data Scientist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HereSection;
