"use client";
import React from "react";
import { motion } from "motion/react";

const ReadyFindJob = () => {
  return (
    <motion.div
      className="bg-primary font-extrabold text-white text-center py-16 text-4xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: "easeOut",
          }}
        >
          Ready to find your dream job?
        </motion.h2>
      </motion.div>
    </motion.div>
  );
};

export default ReadyFindJob;
