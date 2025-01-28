"use client";

import { SouthAmerica } from "@/assets";
import Image from "next/image";

export const Profile = () => {
  return (
    <div className="row-span-3 grid  grid-rows-3 gap-1 py-3 w-64">
      <Image
        src="/image/perfil.jpg"
        alt="perfil"
        width={300}
        height={300}
        className="left-0 p-0.5 rounded-full 2xl:size-40 md:size-28 justify-self-center"
        quality={75}
      />

      <div className="flex text-white tracking-tighter font-light gap-x-3 mx-auto h-fit mt-5 items-center">
        <SouthAmerica
          width={25}
          height={25}
          color={"var(--color-green-primary)"}
          className=" drop-shadow-neon-south-america w-fit"
        />
        <div>América do sul / Brasil</div>
      </div>
      <div className="h-fit items-start  flex -mt-10 text-white tracking-tight font-extralight gap-2 w-fit mx-auto 2xl:-mt-24 ">
        <div className="border p-1 px-3 rounded-2xl bg-white/5 border-white/25 justify-self-center">
          português
        </div>
        <div className="border p-1 px-3 rounded-2xl bg-white/5 border-white/25 justify-self-center">
          inglês
        </div>
        <div className="border p-1 px-3 rounded-2xl bg-white/5 justify-self-center border-white/25">
          espanhol
        </div>
      </div>
    </div>
  );
};
