"use client";
import Lottie from "lottie-react";
import JobPostAnimation from "@/public/job-post.json";

function LottieJobPost() {
  return (
    <div>
      <Lottie animationData={JobPostAnimation} loop={true} />
    </div>
  );
}

export default LottieJobPost;
