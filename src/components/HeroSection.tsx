import Link from "next/link";
import { cn } from "@/utils/lib/util";
import { Spotlight } from "./ui/Spotlight";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const HeroSection = () => {
  return (
    <div className="h-100vw md:h-[40rem] w-full flex flex-col items-center justify-center relative mx-auto md:py-0 py-10 overflow-hidden">
      <Spotlight className="-top-0 left-0 md:-top-20 md:left-60" fill="white" />
      <div className="w-full text-center relative z-10 p-4"></div>
      <h1 className=" text-3xl mt-20 text-nowrap md:text-6xl md:p-0 font-bold bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
        Master the Art of Music
      </h1>

      <p className="text-center mx-auto w-[70%] mt-5 md:text-xl ">
        Discover your true musical potential with expert guidance and hands-on learning. Whether you’re a beginner or an advanced performer, our academy helps you master your craft and express your passion through sound.
      </p>
      <div className="mt-6">
        <Link href={"/courses"}>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            Explore Courses
          </HoverBorderGradient>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
