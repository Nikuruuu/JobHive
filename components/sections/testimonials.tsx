"use client";

import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { testimonials, renderStars } from "@/constant/testimonials";
import Autoplay from "embla-carousel-autoplay";

function Testimonials() {
  // Use all testimonials instead of just featured ones
  const allTestimonials = testimonials;
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-4 w-full max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">What Our Users Say</h2>
          <p className="text-gray-600 mb-4">
            Join thousands of professionals who found their dream jobs through
            JobHive
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {allTestimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <Card className="border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    {/* User Image */}
                    <div className="relative mb-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    </div>

                    {/* User Info */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-primary font-medium">
                        {testimonial.company}
                      </p>
                    </div>

                    {/* Comment */}
                    <blockquote className="text-gray-700 mb-6 leading-relaxed flex-grow flex items-center">
                      <span>&ldquo;{testimonial.comment}&rdquo;</span>
                    </blockquote>

                    {/* Star Rating - Always at bottom */}
                    <div className="flex items-center justify-center mt-auto">
                      <div className="text-yellow-400 text-lg">
                        {renderStars(testimonial.stars)}
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">
                        {testimonial.stars}/5
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonials;
