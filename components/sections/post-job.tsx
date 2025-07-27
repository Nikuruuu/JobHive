import React from "react";
import { Button } from "@/components/ui/button";

import { JobHiveNavbar } from "../common/navBar";

import LottieJobPost from "../common/lottie-jobPost"; // Adjust the path as necessary

function PostJob() {
  return (
    <div>
      <JobHiveNavbar />

      <div className="min-h-screen lg:min-h-[100vh] flex items-center justify-center pt-16 lg:pt-0">
        <div className="container mx-auto px-4 w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center justify-items-center min-h-[70vh]">
            {/* Left Section - Lottie Animation */}
            <div className="hidden lg:flex justify-center items-center order-1 lg:order-1">
              <div className="w-full max-w-md lg:max-w-lg">
                <div className="flex justify-center items-center">
                  <LottieJobPost />
                </div>
              </div>
            </div>

            {/* Right Section - Text Content */}
            <div className="space-y-6 lg:space-y-8 flex flex-col justify-center items-start order-2 lg:order-2">
              {/* Heading */}
              <div className="space-y-2">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-foreground">
                  Attract Top Talent from Around the {""}
                  <span className="text-primary">World</span>
                </h1>

                <p className="text-base text-muted-foreground max-w-lg">
                  Post your job openings and connect with highly skilled
                  professionals across the globe. Whether you&apos;re hiring for
                  tech, creative, or operations roles, our platform helps you
                  reach the right candidates quickly and efficiently.
                </p>

                {/* Bullet Points */}
                <div className="space-y-3 mt-6">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🌍</span>
                    <div>
                      <span className="font-semibold text-foreground">
                        Global Reach:
                      </span>
                      <span className="text-muted-foreground ml-1">
                        Access a diverse talent pool from different countries
                        and backgrounds.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-xl">⚡</span>
                    <div>
                      <span className="font-semibold text-foreground">
                        Fast Applications:
                      </span>
                      <span className="text-muted-foreground ml-1">
                        Get qualified applicants within hours of posting.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-xl">🎯</span>
                    <div>
                      <span className="font-semibold text-foreground">
                        Smart Matching:
                      </span>
                      <span className="text-muted-foreground ml-1">
                        Let our intelligent filters recommend the best-fit
                        candidates.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Call to Action Button */}
                <div className="mt-8">
                  <Button size="lg" className="px-8 py-3 text-lg font-semibold">
                    Post a Job Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostJob;
