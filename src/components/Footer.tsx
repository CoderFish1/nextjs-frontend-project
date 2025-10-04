"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="h-auto w-full bg-black text-gray-400 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center">
      <div>
        <h1 className="mt-8 md:mt-6 lg:m-0 text-xl font-semibold text-white">
          About us
        </h1>
        <p className="mb-4 mt-6">
          Music School is a premier institution dedicated to teaching the art
          and science of music. We nurture talent from the ground up, fostering
          a vibrant community of musicians.
        </p>
      </div>
      <div>
        <h1 className="mt-8 md:mt-6 lg:m-0 text-xl font-semibold text-white">
          Quick Links
        </h1>
        <ul className="mt-6">
          <li>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="mt-8 md:mt-6 lg:m-0 text-xl font-semibold text-white">
          Follow us
        </h1>
        <div className="flex flex-col mt-6">
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Facebook
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Twitter
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Instagram
          </a>
        </div>
      </div>
      <div>
        <h1 className="mt-8 md:mt-6 lg:m-0 text-xl font-semibold text-white">
          Contact Us
        </h1>
        <div className="mt-6">
          <p>New Delhi, India</p>
          <p>Delhi 10001</p>
          <p>Email: info@musicschool.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};
