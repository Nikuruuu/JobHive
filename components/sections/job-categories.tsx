"use client";
import React from "react";
import { motion } from "motion/react";
import { Tilt } from "../motion-primitives/tilt";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getFeaturedCategories } from "@/constant/job-categories";
import {
  HardHat,
  Megaphone,
  Palette,
  TrendingUp,
  Calculator,
  Users,
  ChartColumnBig,
  Lightbulb,
} from "lucide-react";

const iconMap = {
  HardHat,
  Megaphone,
  Palette,
  TrendingUp,
  Calculator,
  Users,
  ChartColumnBig,
  Lightbulb,
} as const;

function JobCategories() {
  const featuredCategories = getFeaturedCategories();

  return (
    <div className="bg-background2">
      <motion.div
        className="container mx-auto px-4 py-16 w-full max-w-7xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore Job Categories
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-8"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Discover roles tailored to your skills and interests across various
          industries.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {/* Job Category Cards using shadcn Card with individual Tilt */}
          {featuredCategories.map((category, index) => {
            const IconComponent =
              iconMap[category.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5 }}
              >
                <Tilt rotationFactor={8} isRevese>
                  <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full">
                    <CardHeader>
                      {IconComponent && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.1 + 0.3,
                            ease: "easeOut",
                          }}
                        >
                          <IconComponent className="w-10 h-10 text-primary mb-2" />
                        </motion.div>
                      )}
                      <CardTitle className="text-xl">
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{category.description}</CardDescription>
                      {category.jobCount && (
                        <motion.p
                          className="text-sm text-primary mt-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                        >
                          {category.jobCount}+ jobs available
                        </motion.p>
                      )}
                    </CardContent>
                  </Card>
                </Tilt>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default JobCategories;
