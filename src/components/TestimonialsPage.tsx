"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/utils/lib/util";

export const TestimonialsPage = () => {
  const testimonials = [
    {
      quote:
        "Joining this music academy completely transformed my understanding of music. The teachers are patient, inspiring, and truly passionate about helping every student shine.",
      name: "Aarav Sharma",
      title: "Piano Student",
    },
    {
      quote:
        "Learning guitar here has been an amazing experience! The curriculum is engaging, and the instructors make even complex techniques easy to grasp.",
      name: "Neha Kapoor",
      title: "Guitar Student",
    },
    {
      quote:
        "The vocal training at this academy has helped me find my voice and build confidence performing on stage. I couldn't ask for better guidance.",
      name: "Riya Verma",
      title: "Vocal Student",
    },
    {
      quote:
        "The variety of instruments and personalized attention really sets this academy apart. Whether you are a beginner or advanced, you’ll find your rhythm here.",
      name: "Karan Mehta",
      title: "Drums Student",
    },
    {
      quote:
        "From the very first lesson, I felt inspired to create and explore music. The teachers encourage creativity and make learning fun!",
      name: "Sanya Joshi",
      title: "Violin Student",
    },
  ];

  return (
    <div className="relative flex h-auto min-h-[40rem] w-full items-center justify-center bg-white dark:bg-black px-4 md:h-[50rem]">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Mask overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      {/* Content */}
      <div className="mt-36 relative w-full max-w-7xl">
        <h1 className="text-center font-bold text-3xl md:text-5xl mb-12 z-10">
          Hear our Harmony: Voice of Success
        </h1>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};
