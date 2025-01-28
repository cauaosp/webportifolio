import { Cat } from "@/assets";
import { Profile } from "../components/homepage";
import { TopMenu } from "../components/shared/index";

export default function HomePage() {
  return (
    <div className="grid gap-2 md:gap-6 h-screen bg-midnight-moss p-5 pb-1 px-36 select-none">
      <TopMenu />
      <div className="grid grid-rows-3 grid-cols-3 p-2 gap-4 gap-y-0 md:gap-y-20 2xl:gap-y-0 overflow-hidden">
        <Profile />
        <div className="col-span-2 text-white  h-fit">
          <div className="tracking-tight font-bold text-5xl mb-4">
            Desenvolvedor Full Stack
          </div>
          <div className="tracking-tighter text-2xl font-extralight">
            Especializado em projetos de ponta a ponta, desde o banco de dados até a interface do usuário.
          </div>
        </div>
        <div className="col-span-2 row-span-2 bg-green-400 overflow-auto max-h-96">
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
        </div>
      </div>
      <div className="h-fit mt-auto mx-auto text-white tracking-tighter font-thin flex items-center justify-between w-full">
        <div>© 2025 / Cauã OSP</div>
        <Cat
          width={35}
          height={35}
          color={"#87B792"}
          className=" drop-shadow-neon-cat w-fit"
        />
      </div>
    </div>
  );
}
