'use client';

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemoBack() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-pink dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    image: "/images/image1b.jpg",
    quote:
      "She was talking about 'ratan ki kachori' and it made her so excited and happy, look at the smile on her face. ",
  },
  {
    image: "/images/image2b.jpg",
    quote:
      "Angry young-man, anger doesn't suit you but you look cute when you're angry ",
  },
  {
    image: "/images/image3b.jpg",
    quote: "This picture is so-satisfying and it is one of the rare moments, whenever i feel angry i look at this omg so relaxing.",
  },
  {
    image: "/images/image4b.jpg",
    quote:
      "Drunk Shruti is my favourite shruti, i love it when you video call me when you're drunk, i feel really loved",
  },
  {
    image: "/images/image8b.jpg",
    quote:
      "Pastries from Theobroma is something you love so muchh, it really feels so great to see you happy like this",
  },
  {
    image: "/images/image6b.jpg",
    quote:
      "Gaurav, please listen i am singing",
  },
  {
    image: "/images/image7b.jpg",
    quote:
      "this is really a very funny and cute picture, my heart really melts when i see you laughing like this",
  },

];
