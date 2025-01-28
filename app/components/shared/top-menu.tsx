"use client";

import { useState } from "react";

export const TopMenu = () => {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <div className="flex gap-6 justify-center items-center h-fit w-96 mx-auto border border-white rounded-3xl py-1 text-white  select-none font-light tracking-tight">
      <div
        className={`hover:border-white/25 hover:bg-white/10   border-transparent py-1 px-3 hover:border  hover:cursor-pointer tracking-tighter border rounded-2xl ${
          activeLink === "home" ? "bg-white/10 border-white/25" : ""
        }`}
        onClick={() => setActiveLink("home")}
      >
        Home
      </div>
      <div
        className={` py-1 px-3 border border-transparent  hover:border hover:border-white/25 hover:bg-white/10 hover:cursor-pointer rounded-2xl ${
          activeLink === "contact" ? "bg-white/10 border-white/25" : ""
        }`}
        onClick={() => setActiveLink("contact")}
      >
        Contact
      </div>
      <div
        className={` border border-transparent py-1 px-3 hover:border hover:border-white/25 hover:bg-white/10 hover:cursor-pointer rounded-2xl ${
          activeLink === "about" ? "bg-white/10 border-white/25" : ""
        }`}
        onClick={() => setActiveLink("about")}
      >
        About me
      </div>
    </div>
  );
};
