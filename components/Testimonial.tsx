"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
<div
className="pt-[7rem]"
  style={{
    backgroundImage: "linear-gradient(98deg, #38bdf924 12%, var(--white) 23%, #d7e1ffbf 36%, #cfeffe52 59%, var(--white) 67%, #9fdffc61 77%, #38bdf945)",
    backgroundSize: "cover",
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat" 
  }}
>

  <div>
  <div className="flex justify-center items-center text-center text-2xl font-bold lg:text-5xl">
    What are customers saying <br /> about us
  </div>
    <div className="h-[25rem] rounded-md flex flex-col antialiase  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  </div>
</div>

  );
}

const testimonials = [
  {
    quote:
      "Reactbot has revolutionized our lead generation process. We’ve effortlessly found and engaged with our ideal customers across multiple platforms. The unified inbox has been a game-changer, making follow-ups seamless and efficient.",
    name: "Jane Smith",
    title: "Marketing Director at TechWave",
  },
  {
    quote:
      "With Reactbot, pulling prospects from LinkedIn and other sources has never been easier. The ability to export leads and send personalized messages directly from the platform has significantly boosted our sales pipeline",
    name: "Emma Johnson",
    title: "CEO of Creative Ventures",
  },
  {
    quote: "Reactbot’s premium support and dedicated account manager have been invaluable. They truly understand our needs and offer tailored solutions. The tool’s ability to manage all LinkedIn actions from a single place is incredibly convenient",
    name: "Sophia Anderson",
    title: "Lead Strategist at Visionary Brands",
  },
  {
    quote:
      "Finding and connecting with dream customers has become so streamlined with Reactbot. The all-in-one features and powerful integrations have made our outreach efforts more effective than ever.",
    name: "Jane Austen",
    title: "Head of Business Development at EcoInnovate",
  },
  {
    quote:
      "The ease of sending invites and messages through Reactbot has accelerated our growth. We’re now able to focus more on nurturing leads rather than managing them, thanks to the organized and unified inbox.",
    name: "Ethan Thompson",
    title: "Co-Founder of StartUp Guru",
  },
];
