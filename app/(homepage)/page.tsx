import { Footer } from "../components/shared/footer";
import { CarouselHomepage, Profile } from "../components/homepage";
import { TopMenu } from "../components/shared/index";

export default function HomePage() {
  return (
    <div className="grid gap-2 md:gap-6 h-screen bg-midnight-moss p-5 pb-1 px-36 select-none">
      <TopMenu />
      <div className="grid grid-rows-3 grid-cols-3 p-5 2xl:pt-10 gap-4 gap-y-0 md:gap-y-20 2xl:gap-y-0 overflow-hidden 2xl:mt-8 2xl:mb-0">
        <Profile />
        <div className="col-span-2 text-white h-fit">
          <div className="tracking-tight font-bold text-5xl mb-4">
            Desenvolvedor Full Stack
          </div>
          <div className="tracking-tighter text-xl font-extralight">
            Especializado em projetos de ponta a ponta, desde o banco de dados
            até a interface do usuário.
          </div>
        </div>
        <CarouselHomepage />
      </div>
      <Footer />
    </div>
  );
}
