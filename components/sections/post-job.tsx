"use client";
import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

import LottieJobPost from "../common/lottie-jobPost"; // Adjust the path as necessary

function PostJob() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="min-h-screen lg:min-h-[100vh] flex items-center justify-center py-8 px-4 sm:py-12 lg:py-16 lg:pt-0">
        <div className="container mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center justify-items-center min-h-[70vh]">
            {/* Left Section - Lottie Animation */}
            <motion.div
              className="hidden lg:flex justify-center items-center order-2 lg:order-1 w-full"
              initial={{ opacity: 0, x: -60, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <div className="flex justify-center items-center">
                  <LottieJobPost />
                </div>
              </div>
            </motion.div>

            {/* Right Section - Text Content */}
            <motion.div
              className="space-y-4 sm:space-y-6 lg:space-y-8 flex flex-col justify-center items-start order-1 lg:order-2 w-full"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              {/* Heading */}
              <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
                <motion.h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                >
                  Attract Top Talent from Around the {""}
                  <span className="text-primary">World</span>
                </motion.h1>

                <motion.p
                  className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                >
                  Post your job openings and connect with highly skilled
                  professionals across the globe. Whether you&apos;re hiring for
                  tech, creative, or operations roles, our platform helps you
                  reach the right candidates quickly and efficiently.
                </motion.p>

                {/* Bullet Points */}
                <motion.div
                  className="space-y-3 sm:space-y-4 mt-4 sm:mt-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.div
                    className="flex items-start gap-3 text-left"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    <motion.span
                      className="text-lg sm:text-xl flex-shrink-0 mt-1"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 1.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      🌍
                    </motion.span>
                    <div className="flex-1">
                      <span className="font-semibold text-foreground text-sm sm:text-base">
                        Global Reach:
                      </span>
                      <span className="text-muted-foreground ml-1 text-sm sm:text-base">
                        Access a diverse talent pool from different countries
                        and backgrounds.
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3 text-left"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <motion.span
                      className="text-lg sm:text-xl flex-shrink-0 mt-1"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 1.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      ⚡
                    </motion.span>
                    <div className="flex-1">
                      <span className="font-semibold text-foreground text-sm sm:text-base">
                        Fast Applications:
                      </span>
                      <span className="text-muted-foreground ml-1 text-sm sm:text-base">
                        Get qualified applicants within hours of posting.
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3 text-left"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    <motion.span
                      className="text-lg sm:text-xl flex-shrink-0 mt-1"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 1.5,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      🎯
                    </motion.span>
                    <div className="flex-1">
                      <span className="font-semibold text-foreground text-sm sm:text-base">
                        Smart Matching:
                      </span>
                      <span className="text-muted-foreground ml-1 text-sm sm:text-base">
                        Let our intelligent filters recommend the best-fit
                        candidates.
                      </span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Call to Action Button */}
                <motion.div
                  className="mt-6 sm:mt-8 flex justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      size="lg"
                      className="px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto max-w-xs"
                    >
                      Post a Job Now
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PostJob;
