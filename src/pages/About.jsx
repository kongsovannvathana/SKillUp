import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="w-full min-h-screen  pb-[150px] md:h-[calc(100vh-80px)] flex items-center bg-gradient-to-br from-blue-100 to-sky-200">
        <div className="w-full h-auto text-center space-y-4 p-5">
          <h1 className="md:text-4xl text-3xl">About Us</h1>
          <p className="md:text-xl text-lg font-semibold">
            Welcome to
            <span className="font-semibold text-blue-600"> SkillUp</span>, a
            platform built to help students and professionals gain real-world
            skills through accessible and engaging learning.
          </p>
          <p className="md:text-xl text-lg font-semibold">
            We started SkillUp with a simple idea: learning should be practical,
            enjoyable, and available to everyone. Our courses are designed with
            hands-on projects, step-by-step guidance, and resources you can
            apply right away.
          </p>
          <p className="md:text-lg text-lg font-semibold">
            Our mission is to empower learners of all levels to grow their
            knowledge, improve their careers, and build a future full of
            opportunities.
          </p>
        </div>
      </div>
    </>
  );
}
