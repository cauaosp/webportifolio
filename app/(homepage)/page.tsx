import {
  AgeCounter,
  CarouselHomepage,
  PortifolioDownload,
  Profile,
} from "../components/homepage";
import { Footer } from "../components/shared/footer";
import { TopMenu } from "../components/shared/index";

export default function HomePage() {
  return (
    <div className="grid gap-2 md:gap-6 h-screen bg-gray-950 p-5 pb-1 px-36 select-none">
      <TopMenu />
      <PortifolioDownload />

      <div className="grid grid-cols-3 p-5 2xl:pt-10 gap-4 gap-y-0 md:gap-y-20 2xl:gap-y-0 overflow-hidden 2xl:mt-8 2xl:mb-0">
        <Profile />
        <div className="col-span-2 text-white text-justify 2xl:text-lg">
          Olá, sou <span className="text-emerald-400">Cauã OSP</span>,
          desenvolvedor nascido e criado em Fortaleza, CE, tenho <AgeCounter />
          ... Atualmente, meu foco é o desenvolvimento Full Stack, busco dominar
          ferramentas e tecnologias para criar soluções completas — desde o
          banco de dados até aplicações interativas no front-end.
        </div>
        <CarouselHomepage />
      </div>
      <Footer />
    </div>
  );
}
