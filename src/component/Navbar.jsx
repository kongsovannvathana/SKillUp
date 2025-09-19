import React from "react";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav>
        <div className="w-full h-[70px] md:w-[full] md:h-[100px] bg-sky-600 text-black flex fixed top-0 z-50">
          <div className="w-[50%] h-full flex items-center">
            <img
              src="logo.png"
              alt=""
              className="w-[70%] h-[60%] ml-4 md:w-[30%] md:h-[60%] md:p-2 lg:w-[25%] lg:h-[70%]"
            />
          </div>

          <div className="w-[50%] h-full hidden sm:flex">
            <ul className="w-full h-full flex justify-evenly items-center">
              <li className="font-bold hover:scale-150 hover:underline decoration-2 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="font-bold hover:scale-150 hover:underline decoration-2 cursor-pointer">
                <Link to="/course">Course</Link>
              </li>
              <li className="font-bold hover:scale-150 hover:underline decoration-2 cursor-pointer">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>

          <div
            className="flex sm:hidden w-full h-full justify-end mr-4 items-center z-50"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <MdClose /> : <MdOutlineMenu />}
          </div>
        </div>
        {/* --------------slide left------- */}
        <div
          className={`sm:hidden bg-sky-600 shadow-lg h-full w-2/4 fixed top-[70px] left-0 duration-300 z-40 ${
            menu ? `-translate-x-0` : `-translate-x-full`
          }`}
        >
          <ul className="w-full h-full p-7 space-y-4">
            <li className="font-bold hover:underline decoration-2 cursor-pointer">
              <Link to="/" onClick={() => setMenu(!menu)}>
                Home
              </Link>
            </li>
            <li className="font-bold hover:underline decoration-2 cursor-pointer">
              <Link to="/course" onClick={() => setMenu(!menu)}>
                Course
              </Link>
            </li>
            <li className="font-bold hover:underline decoration-2 cursor-pointer">
              <Link to="/about" onClick={() => setMenu(!menu)}>
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* ------------right slide------------- */}
        <div
          className={`sm:hidden w-2/4 h-full bg-black/50 fixed top-[70px] right-0 duration-300 z-40 ${
            menu ? `translate-x-0` : `translate-x-full`
          }`}
          onClick={() => setMenu(!menu)}
        ></div>
      </nav>
    </>
  );
}
