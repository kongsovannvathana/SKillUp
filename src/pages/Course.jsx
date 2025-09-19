import React from "react";
import Coursecard from "../component/Coursecard";

export default function Course() {
  const courseList = [
    {
      title: "Photography Basics",
      description:
        "Learn the fundamentals of photography, including composition and lighting.",
      image: "photography.png",
    },
    {
      title: "Cooking Essentials",
      description:
        "Master basic cooking techniques and delicious recipes for everyday meals.",
      image: "cooking.png",
    },
    {
      title: "Creative Writing",
      description:
        "Enhance your writing skills and explore storytelling techniques.",
      image: "writing.png",
    },
    {
      title: "English Speaking",
      description: "Build confidence and deliver powerful presentations.",
      image: "speaking.png",
    },
    {
      title: "Yoga & Mindfulness",
      description:
        "Improve flexibility, focus, and relaxation through yoga and mindfulness exercises.",
      image: "yoga.png",
    },
    {
      title: "Art",
      description: "Learn painting techniques and unleash your creative side.",
      image: "art.png",
    },
    {
      title: "Music Lessons",
      description: "Learn to play instruments or improve your musical skills.",
      image: "music.png",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 pb-[150px] pt-[100px] ml-3 mr-3 sm:grid-cols-3 lg:grid-cols-4 lg:pb-[150px] z-0 lg:pt-[100px] gap-5">
        {courseList.map((course, index) => (
          <Coursecard
            key={index}
            title={course.title}
            description={course.description}
            image={course.image}
          />
        ))}
      </div>
    </>
  );
}
