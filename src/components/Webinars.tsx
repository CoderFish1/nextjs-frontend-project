"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";

export const Webinars = () => {
  return (
    <div className="pt-24 h-auto w-full">
      <h1 className="md:text-[1.3vw] font-semibold text-center text-gray-500">
        FEATURED WEBINARS
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Enhance your Music Journey
      </h2>
      <HoverEffect
        items={featuredWebinars.map((webinar) => ({
          title: webinar.title,
          description: webinar.desc,
          link: `/webinars/${webinar.slug}`,
        }))}
      />
      <div className="flex justify-center mt-8 mb-4">
        <Link href="/courses">
          <div className="text-center bg-white inline-flex text-black p-2 rounded-2xl font-semibold">
            View all Courses
          </div>
        </Link>
      </div>
    </div>
  );
};
const featuredWebinars = [
  {
    title: "Mastering Piano Techniques",
    desc: "Join our expert pianist as they share advanced techniques, practice routines, and tips to elevate your piano skills.",
    slug: "mastering-piano-techniques",
    isFeatured: true,
  },
  {
    title: "Guitar Essentials for Beginners",
    desc: "A beginner-friendly session covering chord progressions, strumming patterns, and foundational guitar skills.",
    slug: "guitar-essentials-for-beginners",
    isFeatured: true,
  },
  {
    title: "Vocal Training and Performance",
    desc: "Learn proper breathing, vocal exercises, and stage presence to enhance your singing performance.",
    slug: "vocal-training-and-performance",
    isFeatured: true,
  },
  {
    title: "Drums: Rhythm and Timing Masterclass",
    desc: "An interactive workshop focusing on drumming techniques, rhythm coordination, and musical timing.",
    slug: "drums-rhythm-and-timing-masterclass",
    isFeatured: true,
  },
  {
    title: "Violin Techniques for Intermediate Players",
    desc: "Advance your violin skills with techniques for bowing, fingering, and expressive playing.",
    slug: "violin-techniques-for-intermediate-players",
    isFeatured: true,
  },
  {
    title: "Music Theory Made Simple",
    desc: "Understand scales, chords, and harmonies in an easy-to-follow session designed for all musicians.",
    slug: "music-theory-made-simple",
    isFeatured: true,
  },
];
