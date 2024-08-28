import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <div className="flex items-center">
          {/* <img
            src="/images/imagemain.jpg"
            alt="Sweetheart"
            className="w-20 h-20 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full mr-4"
          /> */}
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Happy Birthday Sweetheart!
          </p>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
