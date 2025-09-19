import React from "react";
import { useState } from "react";

export default function Coursecard({ title, description, image }) {
  const [enroll, setEnroll] = useState(false);
  return (
    <>
      <div className="w-full h-[350px] bg-white shadow-lg rounded-md p-4 flex flex-col">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="">{description}</p>
          </div>
          <button
            className={`w-24 py-2 mt-2 rounded border border-black text-sky-600 ${
              enroll
                ? "bg-yellow-500 cursor-not-allowed"
                : "hover:bg-yellow-400"
            }`}
            onClick={() => setEnroll(!enroll)}
            disabled={enroll}
          >
            {enroll ? "Enrolled" : "Enroll now"}
          </button>
        </div>
      </div>
    </>
  );
}
