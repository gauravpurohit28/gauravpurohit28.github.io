import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Amazing", "Cute", "Hot", "Funny", "Beautiful", "Talented", "Very Special"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        You&apos;re {/* Fixed unescaped apostrophe */}
        <FlipWords words={words} /> <br />
        and I Love You So Much
      </div>
    </div>
  );
}
