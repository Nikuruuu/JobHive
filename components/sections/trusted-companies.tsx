"use client";

import React from "react";
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

  // Create a modified SVG with the brand color
  const coloredSvg = icon.svg
    .replace(/fill="[^"]*"/g, `fill="#${icon.hex}"`)
    .replace(/<svg/, `<svg style="color: #${icon.hex}; fill: #${icon.hex}"`);

  return (
    <div
      className={`${className} flex items-center justify-center transition-all duration-300 hover:scale-110`}
      dangerouslySetInnerHTML={{ __html: coloredSvg }}
      style={{
        color: `#${icon.hex}`,
        fill: `#${icon.hex}`,
      }}
    />
  );
};

function TrustedCompanies() {
  const featuredCompanies = getFeaturedCompanies();
  const totalPositions = getTotalOpenPositions();

  return (
    <div className="bg-background2 py-16">
      <div className="container mx-auto px-4 w-full max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            Trusted by Leading Companies
          </h2>
          <p className="text-gray-600 mb-4">
            Join thousands of professionals who found their dream jobs
          </p>
          <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              {featuredCompanies.length}+ Top Companies
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              {totalPositions.toLocaleString()}+ Open Positions
            </span>
          </div>
        </div>

        <div className="relative">
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
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500K+</div>
            <p className="text-sm text-muted-foreground">Active Job Seekers</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">20+</div>
            <p className="text-sm text-muted-foreground">Trusted Companies</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <p className="text-sm text-muted-foreground">Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedCompanies;
