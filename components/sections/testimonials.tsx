"use client";

import React, { useRef } from "react";
import { motion } from "motion/react";
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
      <motion.div
        className="container mx-auto px-4 w-full max-w-7xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Header Section */}
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
            What Our Users Say
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Join thousands of professionals who found their dream jobs through
            JobHive
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {allTestimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.7 + index * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <Card className="border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg h-full">
                      <CardContent className="p-6 flex flex-col items-center text-center h-full">
                        {/* User Image */}
                        <motion.div
                          className="relative mb-4"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: 0.8 + index * 0.1,
                            type: "spring",
                            stiffness: 200,
                          }}
                        >
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={80}
                            height={80}
                            className="rounded-full"
                          />
                        </motion.div>

                        {/* User Info */}
                        <motion.div
                          className="mb-4"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: 0.9 + index * 0.1,
                          }}
                        >
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                          <p className="text-xs text-primary font-medium">
                            {testimonial.company}
                          </p>
                        </motion.div>

                        {/* Comment */}
                        <motion.blockquote
                          className="text-gray-700 mb-6 leading-relaxed flex-grow flex items-center"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: 1.0 + index * 0.1,
                          }}
                        >
                          <span>&ldquo;{testimonial.comment}&rdquo;</span>
                        </motion.blockquote>

                        {/* Star Rating - Always at bottom */}
                        <motion.div
                          className="flex items-center justify-center mt-auto"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: 1.1 + index * 0.1,
                            type: "spring",
                            stiffness: 150,
                          }}
                        >
                          <div className="text-yellow-400 text-lg">
                            {renderStars(testimonial.stars)}
                          </div>
                          <span className="ml-2 text-sm text-muted-foreground">
                            {testimonial.stars}/5
                          </span>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Testimonials;
