'use client'
import React from "react";
import {ExpandableCardDemo} from "../components/ExpandableCardDemo"; // Adjust path as necessary
import { InfiniteMovingCardsDemoFor } from "../components/InfintyMovingCardsDemoFor";
import { InfiniteMovingCardsDemoBack } from "../components/InfinityMovingCardsDemoBack";
import { TextGenerateEffectDemo } from "@/components/TextGenerateEffect";
import { BackgroundGradientAnimationDemo } from "@/components/BackgroundGradientAnimation";
import { FlipWordsDemo } from "@/components/FlipWords";
import { AnimatedTooltipPreview } from "@/components/AnimatedTooltip";
import { VideoGrid } from "@/components/VideoGrid";
import {GlobeDemo} from "@/components/GithubGlobe";
import ConfettiEffect from '../components/ConfettiEffect';

const Page = () => {
  return (
    <div className="container mx-0 ">
      <ConfettiEffect />
      <BackgroundGradientAnimationDemo />
      <br></br>
      {/* Include the InfiniteMovingCardsDemo component */}
      <div>
        <h1 
        className="text-2xl mx-auto mb-4 text-center" 
        style={{ fontFamily: 'Copperplate, Papyrus, fantasy' }}
        >
          Memories
        </h1>
      </div>
      <InfiniteMovingCardsDemoFor />
      <InfiniteMovingCardsDemoBack />
      <br></br>
      <div>
      <h1 
        className="text-2xl mx-auto mb-4 text-center" 
        style={{ fontFamily: 'Copperplate, Papyrus, fantasy' }}
        ><p>If Song's Cover picture was you</p></h1>
      <ExpandableCardDemo /></div>
      <main className="container mx-auto p-4">
      <h1 
        className="text-2xl mx-auto mb-4 text-center" 
        style={{ fontFamily: 'Copperplate, Papyrus, fantasy' }}
        ><p> Our Memories in Little Boxes</p><p>Hover to Play Videos</p></h1>
      <VideoGrid />
      </main>

      <div><FlipWordsDemo /></div>
      <div className="div-text mx-10 mb-4 bg-white rounded-lg px-3">
        <GlobeDemo />
      </div>
      <br></br>
      <div>
      <h1 
        className="text-2xl mx-auto mb-4 text-center" 
        style={{ fontFamily: 'Copperplate, Papyrus, fantasy' }}
        >
          Family
        </h1>
        <AnimatedTooltipPreview />
      </div>
      <div>
      <TextGenerateEffectDemo />
      </div>

    </div>
  );
};

export default Page;
