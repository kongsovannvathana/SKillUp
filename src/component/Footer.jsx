import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="sm:hidden w-full h-[150px] bg-sky-600 flex">
          <div className="w-full h-full py-4 px-3">
            <p className="font-bold">Email: skillup@gmail.com</p>
            <p className="font-bold">Address: Phnom Penh, Cambodia</p>
            <div className="w-full h-full flex justify-end items-center">
              <p className="font-bold">
                &copy; 2025 SkillUp. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden sm:grid grid-cols-3 w-full h-[150px] bg-sky-600">
          <div className="flex flex-col pt-5 px-4">
            <p className="font-bold text-xl">Email: skillup@gmail.com</p>
            <p className="font-bold text-xl">Address: Phnom Penh, Cambodia</p>
          </div>
          <div className="flex flex-col items-center pt-5">
            <p className="font-bold text-2xl">Follow us on</p>
            <div className="flex items-center gap-3 pt-5">
              <FaFacebook className="text-4xl cursor-pointer" />
              <FaInstagramSquare className="text-4xl cursor-pointer" />
              <FaSquareXTwitter className="text-4xl cursor-pointer" />
              <AiFillTikTok className="text-4xl cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-end items-end pr-4 pb-3 ">
            <p className="font-bold">
              &copy; 2025 SkillUp. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
