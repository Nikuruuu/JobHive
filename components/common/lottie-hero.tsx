"use client";
import Lottie from "lottie-react";
import JobHuntingAnimation from "@/public/job-hunting-blue.json";

function LottieHero() {
  return (
    <div>
      <Lottie animationData={JobHuntingAnimation} loop={true} />
    </div>
  );
}

export default LottieHero;
