"use client";

import React from "react";
import { motion } from "motion/react";
import { Marquee } from "@/components/magicui/marquee";
import { Card, CardContent } from "@/components/ui/card";
import {
  getFeaturedCompanies,
  getTotalOpenPositions,
} from "@/constant/trusted-companies";
import {
  siGoogle,
  siPanasonic,
  siMoneygram,
  siNotion,
  siMeta,
  siTesla,
  siSamsung,
} from "simple-icons";

const iconMap = {
  google: siGoogle,
  panasonic: siPanasonic,
  moneygram: siMoneygram,
  samsung: siSamsung,
  meta: siMeta,
  tesla: siTesla,
  notion: siNotion,
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

  // Create a mobile-friendly SVG with proper attributes
  const mobileFriendlySvg = icon.svg
    .replace(/width="[^"]*"/g, "")
    .replace(/height="[^"]*"/g, "")
    .replace(/<svg/, `<svg width="100%" height="100%" viewBox="0 0 24 24"`)
    .replace(/fill="[^"]*"/g, `fill="#${icon.hex}"`)
    .replace(/<path/g, `<path fill="#${icon.hex}"`);

  return (
    <div
      className={`${className} flex items-center justify-center transition-all duration-300 hover:scale-110 overflow-hidden`}
      style={{
        minWidth: "40px",
        minHeight: "40px",
      }}
    >
      <div
        className="w-full h-full flex items-center justify-center"
        dangerouslySetInnerHTML={{ __html: mobileFriendlySvg }}
        style={{
          color: `#${icon.hex}`,
          fill: `#${icon.hex}`,
        }}
      />
    </div>
  );
};

function TrustedCompanies() {
  const featuredCompanies = getFeaturedCompanies();
  const totalPositions = getTotalOpenPositions();

  return (
    <div className="bg-background2 py-16">
      <motion.div
        className="container mx-auto px-4 w-full max-w-7xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Trusted by Leading Companies
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Join thousands of professionals who found their dream jobs
          </motion.p>
          <motion.div
            className="flex justify-center items-center gap-6 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.span
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <motion.span
                className="w-2 h-2 bg-green-500 rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: 0.7,
                  type: "spring",
                  stiffness: 300,
                }}
              ></motion.span>
              {featuredCompanies.length}+ Top Companies
            </motion.span>
            <motion.span
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <motion.span
                className="w-2 h-2 bg-blue-500 rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: 0.8,
                  type: "spring",
                  stiffness: 300,
                }}
              ></motion.span>
              {totalPositions.toLocaleString()}+ Open Positions
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Marquee pauseOnHover className="[--duration:20s]">
            {featuredCompanies.map((company) => (
              <Card
                key={company.id}
                className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg h-32 w-40 mx-2"
              >
                <CardContent className="flex flex-col items-center justify-center p-3 h-full">
                  <CompanyIcon
                    iconName={company.logo}
                    className="w-10 h-10 mb-2"
                  />
                  <h3 className="font-medium text-xs text-gray-800 mb-1 text-center leading-tight">
                    {company.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {company.openPositions} jobs
                  </p>
                </CardContent>
              </Card>
            ))}
          </Marquee>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="text-3xl font-bold text-primary mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                type: "spring",
                stiffness: 200,
              }}
            >
              500K+
            </motion.div>
            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              Active Job Seekers
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="text-3xl font-bold text-primary mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.9,
                type: "spring",
                stiffness: 200,
              }}
            >
              20+
            </motion.div>
            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.0 }}
            >
              Trusted Companies
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="text-3xl font-bold text-primary mb-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 1.0,
                type: "spring",
                stiffness: 200,
              }}
            >
              95%
            </motion.div>
            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.1 }}
            >
              Success Rate
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default TrustedCompanies;
