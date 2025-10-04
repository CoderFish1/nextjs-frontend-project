"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Master Instruments",
    description:
      "From guitar and piano to drums and violin, choose from a wide range of instrument courses designed for beginners and advanced learners alike.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--orange-500))] text-white">
        🎸 Master Instruments
      </div>
    ),
  },
  {
    title: "Music Production",
    description:
      "Learn electronic music production, mixing, and mastering with industry-standard tools like Ableton, FL Studio, and Logic Pro.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        Music Production
      </div>
    ),
  },
  {
    title: "Vocal Training",
    description:
      "Enhance your singing skills with structured vocal lessons. From warm-ups to advanced techniques, find the right course for your voice.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--purple-500))] text-white">
        🎤 Vocal Training
      </div>
    ),
  },
  {
    title: "Learn Anytime, Anywhere",
    description:
      "Access your purchased courses anytime. Practice at your own pace and revisit lessons whenever you need to — on mobile, tablet, or desktop.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--cyan-500))] text-white">
        📚 Learn Anytime
      </div>
    ),
  },
];

export const WhyChoose = () => {
  return (
    <div className="w-full">
      <StickyScroll content={content} />
    </div>
  );
};
