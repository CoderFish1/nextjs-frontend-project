"use client";
import React from "react";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { BackgroundGradient } from "./ui/background-gradient";

// creating our own type of  json in typescript
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedCourses = () => {
  let featuredData = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="w-full bg-gray-800 relative h-auto">
      <div className="text-5xl font-bold text-center pt-24 pb-16">
        Learn with the Best
      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 pb-16">
        {featuredData.map((course: Course) => (
           <BackgroundGradient>
           <div
            key={course.id}
            className="p-6 rounded-lg flex flex-col justify-between"
          >
            <div>
             
              <div className="text-2xl font-semibold text-center mb-4">
                {course.title}
              </div>
              <p className="text-base text-center mb-6">
                {course.description}
              </p>
            </div>
            <div className="flex justify-center">
              <Link href={`/courses/${course.slug}`}>
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  LEARN MORE
                </Button>
              </Link>
            </div>
          </div>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;
