import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="w-full h-[calc(100vh-80px)] relative flex mt-[70px]">
        <img
          src="bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="md:absolute top-0 md:top-1/2 transform md:-translate-y-1/2 flex items-center z-10">
          <div className="w-full md:w-[50%] px-4 md:pl-16 space-y-3 md:space-y-5">
            <p className="font-bold text-3xl md:text-6xl">
              Welcome to SkillUp!
            </p>
            <p className="font-bold text-xl md:text-3xl">
              A place where you can learn new skills everyday.
            </p>
            <p className="font-bold text-sm md:text-lg">
              Start your journey today, expand your knowledge, and unlock your
              potential with our engaging and interactive lessons. Learning has
              never been this fun and accessible!
            </p>
            <button className="px-2 py-3 border border-black text-slate-800 bg-yellow-400 rounded-lg hover:bg-yellow-500 w-fit">
              <Link to="/course">View Course</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
