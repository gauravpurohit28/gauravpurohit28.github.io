"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Pops",
    designation: "Smartest Man Alive",
    image:
      "/images/Pops.jpg",
  },
  {
    id: 2,
    name: "Mummy",
    designation: "The sweetest",
    image:
      "/images/Mummy.jpg",
  },
  {
    id: 3,
    name: "Shreya",
    designation: "Motu",
    image:
      "/images/Shreya.jpg",
  },
  {
    id: 4,
    name: "Mr. Boyfriend",
    designation: "Pookie",
    image:
      "/images/Me.jpg",
  },
  {
    id: 5,
    name: "Guddu",
    designation: "My love!",
    image:
      "/images/Guddu.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
