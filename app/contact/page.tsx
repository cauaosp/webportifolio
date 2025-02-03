import { AgeCounter, PortifolioDownload } from "../components/homepage";
import { Footer, TopMenu } from "../components/shared";

export default function Contact() {
  return (
    <div className="grid gap-2 md:gap-6 h-screen bg-gray-950 p-5 pb-1 px-36 select-none">
      <TopMenu />
      <PortifolioDownload />
      <div className="grid grid-rows-3 grid-cols-3 p-5 2xl:pt-10 gap-4 gap-y-0 md:gap-y-20 2xl:gap-y-0 overflow-hidden 2xl:mt-8 2xl:mb-0 border-6 border-white">
        <div className="bg-red-200 row-span-full">AAAAAAAAAAAAAA</div>
        <div className="col-span-2 text-white text-justify 2xl:text-lg bg-blue-200 row-span-full overflow-auto">
          Olá, sou <span className="text-emerald-400">Cauã OSP</span>,
          desenvolvedor nascido e criado em Fortaleza, CE, tenho <AgeCounter />
          ... Atualmente, meu foco é o desenvolvimento Full Stack, busco dominar
          ferramentas e tecnologias para criar soluções completas — desde o
          banco de dados até aplicações interativas no front-end.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure itaque saepe incidunt natus obcaecati vero voluptates explicabo quaerat, corrupti, architecto eum error dicta eaque doloremque qui minus blanditiis veniam velit!Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est eius, tempore, quisquam laudantium libero culpa numquam eaque deserunt quos inventore ipsa magnam ad illum molestiae iure nostrum excepturi! Reprehenderit, facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat saepe consequatur ex at culpa provident quo laborum architecto deserunt facilis repellendus ipsa unde totam, atque assumenda nobis quibusdam possimus accusantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sint sapiente soluta rerum sit dolore perferendis ipsa dicta, fugit enim tenetur, hic alias ducimus ex omnis provident vitae. Modi, quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ullam deleniti maiores consectetur vel, officiis assumenda aut libero quos voluptatibus repellat! Atque laudantium voluptate id est, mollitia velit earum pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maiores rerum molestiae voluptates facere quod? Eveniet at tenetur cumque ex reprehenderit ab. Eveniet assumenda aperiam fugiat sint, animi illum saepe.
        </div>
      </div>
      <Footer />
    </div>
  );
}
