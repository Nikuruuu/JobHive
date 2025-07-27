import { Aperture } from "lucide-react";
import React from "react";

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
        <Aperture className="w-5 h-5 text-primary-foreground" />
      </div>
      <h1 className="text-xl hidden sm:block md:text-2xl text-primary font-bold">
        JobHive
      </h1>
    </div>
  );
}

export default Logo;
