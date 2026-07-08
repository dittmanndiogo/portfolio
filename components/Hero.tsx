import { FaDownload, FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { FloatingTechLogos } from "./ui/FloatingTechLogos";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <>
      <div className="pb-20 pt-20 lg:pt-36">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="#22D3EE"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      <div className="h-[50rem] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <FloatingTechLogos />

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Construo soluções modernas de ponta a ponta."
            highlightWords={["soluções", "modernas", "ponta"]}
          />

          <p className="max-w-3xl text-center text-white-100 mb-4 text-sm leading-relaxed md:text-lg lg:text-xl">
            Sou Diogo, Desenvolvedor Full Stack. Transformo
            desafios de negócio em produtos escaláveis com React, Node.js,
            TypeScript e AWS.
          </p>

          <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row md:mt-0">
            <a href="#projetos" className="w-full sm:w-auto">
              <MagicButton
                title="Veja meus projetos"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a
              href="/curriculo-diogo-dittmann-2026.pdf"
              download="Curriculo - Diogo Dittmann - 2026.pdf"
              className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-7 text-sm font-medium text-white-100 transition hover:border-brand/30 hover:bg-brand/[0.06] hover:text-brand sm:w-60 md:mt-10"
            >
              Baixar currículo
              <FaDownload className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
