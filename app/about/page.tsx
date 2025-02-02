import { Profile } from "../components/homepage";
import { Footer, TopMenu } from "../components/shared";

export default function About() {
  return (
    <div className="grid gap-2 md:gap-6 h-screen bg-midnight-moss p-5 pb-1 px-36 select-none">
      <TopMenu />
      <div className="grid grid-cols-3 p-5 pt-10 gap-4 gap-y-0 md:gap-y-20 2xl:gap-y-0 overflow-hidden 2xl:mt-8 2xl:mb-0 ">
        <Profile />
        <div className="text-white overflow-auto col-span-2 h-full row-span-3">
          <div className="flex flex-col gap-6 mb-15">
            <div className="font-bold text-7xl">Cauã OSP</div>
            <div className="text-2xl tracking-tighter text-green-500">
              Desenvolvedor Full Stack
            </div>
            <div className="text-justify mr-5 font-extralight">
              Desenvolvedor Full Stack de Fortaleza, CE, com experiência em
              desenvolvimento web e projetos de software. Possuo habilidades em
              trabalhar em equipe e entregar resultados de alta qualidade.
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="font-bold text-3xl">
              Experiências profissionais
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1 mr-5 p-1">
                <div className="font-bold text-2xl">Fitbank</div>
                <div className="flex justify-between text-green-500 text-xs">
                  <div>Desenvolvedor Full Stack</div>
                  <div>09/2023 - 01/2025</div>
                </div>
                <div className="text-md font-extralight text-justify">
                  Criação de aplicativo web com integrações a APIs REST,
                  garantindo a aderência a contratos e regras de negócios
                  bancárias. Focado em entregas rápidas e eficientes
                </div>
              </div>
              <div className="flex flex-col gap-1 mr-5 p-1">
                <div className="font-bold text-2xl">Include Jr</div>
                <div className="flex justify-between text-green-500 text-xs">
                  <div>Desenvolvedor</div>
                  <div>12/2021 - 06/2023</div>
                </div>
                <div className="text-md font-extralight text-justify">
                  Trabalhei na Include Jr em 3 funções diferentes entre 2021 e
                  2023. Como Desenvolvedor Front-End, desenvolvi páginas com
                  WordPress, criei design e protótipos. Já como Gerente de
                  Vendas, prospectei e negociei com novos clientes, criando
                  propostas e contratos. Além disso, também atuei na gestão
                  estratégica de times de desenvolvimento de projetos,
                  utilizando metodologias ágeis e planejamento baseado nas
                  necessidades do cliente.
                </div>
              </div>
            </div>
            <div>
              <div className=" font-bold text-3xl">
                Desenvolvedor Full Stack
              </div>
              <div className=" text-2xl font-extralight">
                Especializado em projetos de ponta a ponta, desde o banco de
                dados até a interface do usuário.
              </div>
            </div>
            <div>
              <div className=" font-bold text-3xl">
                Desenvolvedor Full Stack
              </div>
              <div className=" text-2xl font-extralight">
                Especializado em projetos de ponta a ponta, desde o banco de
                dados até a interface do usuário.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
