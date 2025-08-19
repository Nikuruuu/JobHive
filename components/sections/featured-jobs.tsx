"use client";
import React from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  getFeaturedJobs,
  formatSalary,
  getRelativeDate,
} from "@/constant/featured-jobs";
import {
  siGoogle,
  siWise,
  siApple,
  siSalesforce,
  siNetflix,
  siStripe,
  siAirbnb,
  siShopify,
} from "simple-icons";
import { ArrowRight, Clock, MapPin } from "lucide-react";

const iconMap = {
  google: siGoogle,
  wise: siWise,
  apple: siApple,
  salesforce: siSalesforce,
  netflix: siNetflix,
  stripe: siStripe,
  airbnb: siAirbnb,
  shopify: siShopify,
} as const;

const CompanyIcon = ({
  iconName,
  className,
}: {
  iconName: string;
  className?: string;
}) => {
  const icon = iconMap[iconName as keyof typeof iconMap];

  if (!icon) return null;

  // Create a cleaner SVG with proper mobile support
  const cleanSvg = icon.svg
    .replace(/width="[^"]*"/g, "")
    .replace(/height="[^"]*"/g, "")
    .replace(/<svg/, `<svg width="100%" height="100%" viewBox="0 0 24 24"`)
    .replace(/fill="[^"]*"/g, `fill="#${icon.hex}"`)
    .replace(/<path/g, `<path fill="#${icon.hex}"`);

  return (
    <div
      className={`${className} flex items-center justify-center rounded-lg bg-white border border-gray-100 shadow-sm overflow-hidden`}
      style={{
        minWidth: "48px",
        minHeight: "48px",
      }}
    >
      <div
        className="w-6 h-6"
        dangerouslySetInnerHTML={{ __html: cleanSvg }}
        style={{
          color: `#${icon.hex}`,
          fill: `#${icon.hex}`,
        }}
      />
    </div>
  );
};

function FeaturedJobs() {
  const featuredJobs = getFeaturedJobs();

  return (
    <div className="bg-gray-50/50">
      <motion.div
        className="container mx-auto px-4 py-16 w-full max-w-7xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Featured Jobs
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Discover your next career opportunity from our curated list of
          featured jobs.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {featuredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{
                opacity: 0,
                y: 60,
                rotateX: 15,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
                scale: 1,
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.25, 0.4, 0.25, 1],
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 },
              }}
              className="w-full"
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-white flex flex-col h-full">
                <CardHeader className="pb-4 px-6 pt-6">
                  {/* Company Info */}
                  <div className="flex items-start gap-3 mb-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08 + 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <CompanyIcon
                        iconName={job.companyLogo}
                        className="w-12 h-12 p-2 flex-shrink-0"
                      />
                    </motion.div>
                    <motion.div
                      className="flex-1 min-w-0 pr-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08 + 0.4,
                      }}
                    >
                      <h3 className="font-semibold text-lg truncate">
                        {job.companyName}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{job.companyAddress}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Job Type Badge - Separate row */}
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08 + 0.5,
                    }}
                  >
                    <Badge
                      variant="secondary"
                      className={`text-xs px-2 py-1 ${
                        job.jobType === "Full-time"
                          ? "bg-green-100 text-green-700 border-green-200"
                          : job.jobType === "Remote"
                          ? "bg-blue-100 text-blue-700 border-blue-200"
                          : job.jobType === "Hybrid"
                          ? "bg-purple-100 text-purple-700 border-purple-200"
                          : "bg-gray-100 text-gray-700 border-gray-200"
                      }`}
                    >
                      {job.jobType}
                    </Badge>
                  </motion.div>
                </CardHeader>

                <CardContent className="pt-0 flex-1 flex flex-col px-6 pb-6">
                  {/* Job Title */}
                  <motion.h4
                    className="text-xl font-semibold mb-3 text-gray-900 leading-tight min-h-[3.5rem] flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08 + 0.6,
                    }}
                  >
                    {job.role}
                  </motion.h4>

                  {/* Description */}
                  <motion.p
                    className="text-sm text-muted-foreground mb-4 flex-1 min-h-[4.5rem]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08 + 0.7,
                    }}
                  >
                    {job.description.length > 120
                      ? `${job.description.substring(0, 120)}...`
                      : job.description}
                  </motion.p>

                  {/* Tags */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-6 min-h-[2rem]"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08 + 0.8,
                    }}
                  >
                    {job.tags.slice(0, 3).map((tag, tagIndex) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.08 + 0.8 + tagIndex * 0.1,
                        }}
                      >
                        <Badge
                          variant="outline"
                          className="text-xs bg-gray-50 text-gray-600 border-gray-200"
                        >
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                    {job.tags.length > 3 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.08 + 1.1,
                        }}
                      >
                        <Badge
                          variant="outline"
                          className="text-xs bg-gray-50 text-gray-600 border-gray-200"
                        >
                          +{job.tags.length - 3} more
                        </Badge>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Bottom Section - Fixed at bottom */}
                  <motion.div
                    className="mt-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08 + 0.9,
                    }}
                  >
                    <div className="flex items-end justify-between">
                      <div className="flex-1">
                        <div className="font-semibold text-lg text-gray-900 mb-1">
                          {formatSalary(job)}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {getRelativeDate(job.datePosted)}
                        </div>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 ml-3">
                          Apply Now
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button className="w-full max-w-xs sm:w-auto sm:px-8">
              View All Jobs <ArrowRight />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default FeaturedJobs;
