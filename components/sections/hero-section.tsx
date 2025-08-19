"use client";
import React from "react";
import { BriefcaseBusiness, Map, Search } from "lucide-react";
import { motion } from "motion/react";

import { JobHiveNavbar } from "../common/navBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LottieHero from "../common/lottie-hero";

function HereSection() {
  return (
    <div>
      <JobHiveNavbar />

      <div className="min-h-[calc(100vh-80px)] lg:min-h-[100vh] flex items-center justify-center pt-2 sm:pt-4 lg:pt-0 pb-8 px-4 sm:py-12 lg:py-16">
        {/* Hero Content */}
        <div className="container mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center justify-items-center min-h-[70vh]">
            {/* Left Section - Lottie Animation */}
            <motion.div
              className="hidden lg:flex justify-center items-center order-1 lg:order-1 w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="w-full max-w-md lg:max-w-lg">
                <div className="flex justify-center items-center">
                  <LottieHero />
                </div>
              </div>
            </motion.div>

            {/* Right Section - Text Content */}
            <motion.div
              className="space-y-4 sm:space-y-6 lg:space-y-8 flex flex-col justify-center items-start order-2 lg:order-2 w-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              {/* Heading */}
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-center lg:text-left">
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Join Us and Unlock Your{" "}
                  <span className="text-primary">Future</span>
                </motion.h1>
                <motion.h2
                  className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                >
                  Explore Thousands of Job Opportunities
                </motion.h2>
                <motion.p
                  className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                >
                  Discover your next career move with top employers. Find jobs
                  that match your passion, skills, and ambition.
                </motion.p>
              </div>

              {/* Search Bar */}
              <motion.div
                className="space-y-3 sm:space-y-4 w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              >
                <div className="flex flex-col sm:flex-row gap-3 p-3 sm:p-2 bg-background rounded-lg shadow-sm border border-border/50">
                  {/* Job Title Input */}
                  <div className="flex-1 relative">
                    <BriefcaseBusiness className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                    <Input
                      type="text"
                      placeholder="Job title or keywords"
                      className="border-0 shadow-none focus-visible:ring-0 text-sm sm:text-base pl-10 h-10 sm:h-12"
                    />
                  </div>

                  {/* Vertical Divider */}
                  <div className="hidden sm:flex items-center">
                    <div className="w-px h-8 bg-border"></div>
                  </div>

                  {/* Location Input */}
                  <div className="flex-1 relative">
                    <Map className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                    <Input
                      type="text"
                      placeholder="Location"
                      className="border-0 shadow-none focus-visible:ring-0 text-sm sm:text-base pl-10 h-10 sm:h-12"
                    />
                  </div>

                  {/* Search Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 sm:px-8 h-10 sm:h-12 text-sm sm:text-base w-full"
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Search Jobs
                    </Button>
                  </motion.div>
                </div>

                {/* Popular Searches */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm">
                  <span className="text-muted-foreground">
                    Popular searches:
                  </span>
                  <motion.button
                    className="text-primary hover:underline"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Frontend Developer
                  </motion.button>
                  <span className="text-muted-foreground hidden sm:inline">
                    •
                  </span>
                  <motion.button
                    className="text-primary hover:underline"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Marketing Manager
                  </motion.button>
                  <span className="text-muted-foreground hidden sm:inline">
                    •
                  </span>
                  <motion.button
                    className="text-primary hover:underline"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Data Scientist
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HereSection;
