import React from "react";
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

  return (
    <div
      className={`${className} flex items-center justify-center rounded-lg bg-white border border-gray-100 shadow-sm`}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
      style={{
        color: `#${icon.hex}`,
        fill: `#${icon.hex}`,
      }}
    />
  );
};

function FeaturedJobs() {
  const featuredJobs = getFeaturedJobs();

  return (
    <div className="bg-gray-50/50">
      <div className="container mx-auto px-4 py-16 w-full max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-2">Featured Jobs</h2>
        <p className="text-center text-gray-600 mb-8">
          Discover your next career opportunity from our curated list of
          featured jobs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {featuredJobs.map((job) => (
            <Card
              key={job.id}
              className="hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-white flex flex-col h-full"
            >
              <CardHeader className="pb-4 px-6 pt-6">
                {/* Company Info */}
                <div className="flex items-start gap-3 mb-4">
                  <CompanyIcon
                    iconName={job.companyLogo}
                    className="w-12 h-12 p-2 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0 pr-2">
                    <h3 className="font-semibold text-lg truncate">
                      {job.companyName}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{job.companyAddress}</span>
                    </div>
                  </div>
                </div>

                {/* Job Type Badge - Separate row */}
                <div className="flex justify-start">
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
                </div>
              </CardHeader>

              <CardContent className="pt-0 flex-1 flex flex-col px-6 pb-6">
                {/* Job Title */}
                <h4 className="text-xl font-semibold mb-3 text-gray-900 leading-tight min-h-[3.5rem] flex items-start">
                  {job.role}
                </h4>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 flex-1 min-h-[4.5rem]">
                  {job.description.length > 120
                    ? `${job.description.substring(0, 120)}...`
                    : job.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 min-h-[2rem]">
                  {job.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs bg-gray-50 text-gray-600 border-gray-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {job.tags.length > 3 && (
                    <Badge
                      variant="outline"
                      className="text-xs bg-gray-50 text-gray-600 border-gray-200"
                    >
                      +{job.tags.length - 3} more
                    </Badge>
                  )}
                </div>

                {/* Bottom Section - Fixed at bottom */}
                <div className="mt-auto">
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

                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 ml-3">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button className="w-full max-w-xs sm:w-auto sm:px-8">
            View All Jobs <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedJobs;
