"use client";

import { Home, Send, UserAvatar } from "@/assets";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const TopMenu = () => {
  const [activeLink, setActiveLink] = useState("");
  const router = useRouter();

  useEffect(() => {
    console.log(activeLink);
    if (activeLink !== "") {
      if (activeLink == "home") {
        router.push("/");
        return;
      }
      router.push(`/${activeLink}`);
    }
  }, [activeLink, router]);

  return (
    <div className="flex gap-6 justify-center items-center h-fit w-96 mx-auto border border-neutral-700 bg-neutral-900/10 rounded-3xl py-1 text-white  select-none font-light tracking-tight">
      <div
        className={`hover:border-white/25 hover:bg-white/10 border-transparent py-1 px-3 hover:border  hover:cursor-pointer tracking-tighter border rounded-2xl ${
          activeLink === "home" ? "bg-white/10 border-white/25" : ""
        }`}
        onClick={() => setActiveLink("home")}
      >
        <Home color={"#fff"} width={25} height={25} />
      </div>
      <div className="font-thin text-white/25">|</div>
      <div
        className={` py-1 pr-3 pl-2 border border-transparent hover:border hover:border-white/25 hover:bg-white/10 hover:cursor-pointer rounded-2xl flex gap-x-1 items-center ${
          activeLink === "contact" ? "bg-white/10 border-white/25" : ""
        }`}
        onClick={() => setActiveLink("contact")}
      >
        <Send fill={"#ffffff33"} width={25} height={25} stroke={"#fff"} />
        <div>Contato</div>
      </div>
      <div
        className={` border border-transparent py-1 px-3 hover:border hover:border-white/25 hover:bg-white/10 hover:cursor-pointer rounded-2xl flex gap-x-1 items-center ${
          activeLink === "about" ? "bg-white/10 border-white/25" : ""
        }`}
        onClick={() => setActiveLink("about")}
      >
        <UserAvatar
          fill={"#ffffff"}
          width={20}
          height={20}
          className={"-mt-0.5 "}
        />

        <div>Sobre</div>
      </div>
    </div>
  );
};
