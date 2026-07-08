"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaCheck, FaCode, FaLightbulb } from "react-icons/fa6";

const steps = [
  {
    phase: "Fase 1",
    title: "Análise e Planejamento",
    description:
      "Entendo os requisitos e necessidades e desenvolvo um plano detalhado para abordar a questão.",
    icon: FaLightbulb,
  },
  {
    phase: "Fase 2",
    title: "Desenvolvimento e Implementação",
    description:
      "Crio a solução conforme o plano e realizo testes para garantir o funcionamento adequado da solução.",
    icon: FaCode,
  },
  {
    phase: "Fase 3",
    title: "Entrega e Feedback",
    description:
      "Apresento o resultado e faço os ajustes finais para garantir que a solução atenda às necessidades.",
    icon: FaCheck,
  },
];

const Approach = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 65%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
  });
  const orbTop = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative w-full py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-glow/[0.05] blur-[120px]" />

      <div className="relative">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.28em] text-brand/70">
          Do conceito à entrega
        </p>
        <h1 className="heading">
          Minha <span className="text-brand">abordagem</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-white-100/70 md:text-base">
          Um processo claro e colaborativo para transformar uma necessidade em
          uma solução sólida.
        </p>

        <div ref={timelineRef} className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2">
            <motion.div
              className="absolute left-0 top-0 h-full w-px origin-top bg-gradient-to-b from-brand via-brand-glow to-brand"
              style={{ scaleY: progress }}
            />
            <motion.div
              aria-hidden="true"
              className="absolute -left-[5px] h-[11px] w-[11px] -translate-y-1/2 rounded-full bg-brand shadow-[0_0_18px_4px_rgba(94,234,212,0.65)]"
              style={{ top: orbTop }}
            />
          </div>

          <div className="space-y-10 md:space-y-14">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isRight = index % 2 !== 0;

              return (
                <motion.article
                  key={step.phase}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: 0.08 }}
                  className="relative grid pl-14 md:grid-cols-2 md:pl-0"
                >
                  <div
                    className={`md:px-12 ${
                      isRight
                        ? "md:col-start-2 md:text-left"
                        : "md:col-start-1 md:row-start-1 md:text-right"
                    }`}
                  >
                    <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-slate-950/60 p-6 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_20px_55px_-30px_rgba(34,211,238,0.4)] md:p-8">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(34,211,238,0.10),transparent_42%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div
                        className={`relative flex flex-col items-start ${
                          isRight ? "" : "md:items-end"
                        }`}
                      >
                        <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
                          {step.phase}
                        </span>
                        <h2 className="mt-3 text-xl font-bold leading-tight text-white md:text-2xl">
                          {step.title}
                        </h2>
                        <p className="mt-3 max-w-md text-sm leading-relaxed text-white-100/70 md:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-brand/40 bg-black-100 text-brand shadow-[0_0_0_6px_#020617] md:left-1/2 md:-translate-x-1/2">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
