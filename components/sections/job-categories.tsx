import React from "react";
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
      <div className="container mx-auto px-4 py-16 w-full max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-2">
          Explore Job Categories
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Discover roles tailored to your skills and interests across various
          industries.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {/* Job Category Cards using shadcn Card with individual Tilt */}
          {featuredCategories.map((category) => {
            const IconComponent =
              iconMap[category.icon as keyof typeof iconMap];

            return (
              <Tilt key={category.id} rotationFactor={8} isRevese>
                <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <CardHeader>
                    {IconComponent && (
                      <IconComponent className="w-10 h-10 text-primary mb-2" />
                    )}
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{category.description}</CardDescription>
                    {category.jobCount && (
                      <p className="text-sm text-primary mt-2">
                        {category.jobCount}+ jobs available
                      </p>
                    )}
                  </CardContent>
                </Card>
              </Tilt>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default JobCategories;
