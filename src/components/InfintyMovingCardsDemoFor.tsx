'use client';

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemoFor() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-pink dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    image: "/images/image1.jpg",
    quote:
      "Train jouneys were never so fun for me, during thoose two months i had the best time while travelling, we were having really a difficult time but this particular train travel healed that",
  },
  {
    image: "/images/image2.jpg",
    quote:
      "Watching you fall asleep is like my new favourite thing, you are looking soo fucking cute, you look like a baby when you are sleeping, I love the sound of you..breathing..it makes me feel like i am sleeping beside you",
  },
  {
    image: "/images/image3.jpg",
    quote: "i can't forget these auto rides babe, but it felt really empty on the way back to railways station after dropping you",
  },
  {
    image: "/images/image4.jpg",
    quote:
      "I had some of my greatest memories of my life in goa with you",
  },
  {
    image: "/images/image5.jpg",
    quote:
      "You look soo adorable in ethnics shrutii, my heartbeat seriously races when i see in a outfit like this",
  },
  {
    image: "/images/image6.jpg",
    quote:
      "This is really a cute and funny moment, i was trying to lift you and when i did, you took the picture really quick, sorry, but you're seriously haevy babe",
  },
  {
    image: "/images/image7.jpg",
    quote:
      "This one is the closest to my heart, it reminds me of that 'do choti wali shruti' whom I met in school.",
  },
];
