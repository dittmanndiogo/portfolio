import {
  FaArrowUpRightFromSquare,
  FaCloud,
  FaGraduationCap,
  FaLanguage,
  FaShieldHalved,
} from "react-icons/fa6";

const education = [
  {
    type: "Graduação",
    title: "Tecnologia em Ciência de Dados",
    institution: "UNINTER Centro Universitário Internacional",
    period: "2022 — 2025",
    description:
      "Base analítica para transformar dados em decisões e construir soluções orientadas a problemas reais.",
    icon: FaGraduationCap,
  },
  {
    type: "Pós-graduação",
    title: "Segurança e Defesa Cibernética",
    institution: "Em andamento",
    period: "2026 — atual",
    description:
      "Aprofundamento em segurança para desenvolver aplicações mais resilientes desde a arquitetura.",
    icon: FaShieldHalved,
    current: true,
  },
  {
    type: "Certificação",
    title: "Inglês — Nível 3 Advanced",
    institution: "U-BEST · UNINTER",
    period: "Dezembro de 2025",
    description:
      "Proficiência para colaborar, estudar e me comunicar em contextos técnicos internacionais.",
    icon: FaLanguage,
  },
];

const awsTraining = [
  {
    title: "Scaling Serverless Architectures",
    issuedAt: "Julho de 2026",
    skills: "AWS Lambda · Amazon API Gateway · Arquiteturas serverless",
    credential:
      "https://www.linkedin.com/in/diogo-dittmann-81648b295/overlay/Certifications/669193985/treasury/?profileId=ACoAAEdwltIBroYRO0mLMHj465Aa-2Og_bzA1lg",
  },
  {
    title: "Designing Event-Driven Certificate",
    issuedAt: "Junho de 2026",
    skills: "Event-Driven Architecture · AWS Lambda · Integrações assíncronas",
    credential:
      "https://www.linkedin.com/in/diogo-dittmann-81648b295/overlay/Certifications/403723640/treasury/?profileId=ACoAAEdwltIBroYRO0mLMHj465Aa-2Og_bzA1lg",
  },
];

const Education = () => {
  return (
    <section className="relative py-20" id="formacao">
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-brand-glow/[0.05] blur-[110px]" />

      <div className="relative">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.28em] text-brand/70">
          Conhecimento em movimento
        </p>
        <h1 className="heading">
          Formação e <span className="text-brand">evolução</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-white-100/70 md:text-base">
          Uma trajetória que conecta dados, desenvolvimento de software e
          segurança para criar produtos cada vez mais completos.
        </p>

        <div className="relative mt-14 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="absolute left-[16.67%] right-[16.67%] top-11 hidden h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent lg:block" />

          {education.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-slate-950/55 p-6 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_20px_55px_-32px_rgba(34,211,238,0.4)] sm:p-7"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(34,211,238,0.10),transparent_42%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/20 bg-brand/[0.07] text-brand transition duration-500 group-hover:border-brand/40 group-hover:bg-brand/[0.12]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    {item.current && (
                      <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand/[0.06] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
                        Em curso
                      </span>
                    )}
                  </div>

                  <div className="mt-8">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/70">
                      {item.type}
                    </span>
                    <h2 className="mt-3 text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-brand sm:text-2xl">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm font-medium text-white-100/80">
                      {item.institution}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white-100/40">
                      {item.period}
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-white-100/65">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl border border-white/[0.08] bg-slate-950/35 p-5 sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-brand/20 bg-brand/[0.07] text-brand">
                <FaCloud className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/70">
                  Especialização cloud
                </span>
                <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                  Treinamentos Amazon Web Services
                </h2>
              </div>
            </div>
            <span className="w-fit rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white-100/60">
              AWS Training
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {awsTraining.map((training) => (
              <a
                key={training.title}
                href={training.credential}
                target="_blank"
                rel="noreferrer"
                className="group/aws relative overflow-hidden rounded-2xl border border-white/[0.08] bg-black-100/60 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-brand/30"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(34,211,238,0.09),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover/aws:opacity-100" />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-brand/70">
                      Amazon Web Services (AWS)
                    </span>
                    <h3 className="mt-2 text-lg font-bold leading-snug text-white transition-colors group-hover/aws:text-brand">
                      {training.title}
                    </h3>
                  </div>
                  <FaArrowUpRightFromSquare className="mt-1 h-3.5 w-3.5 shrink-0 text-white/30 transition group-hover/aws:text-brand" />
                </div>
                <p className="relative mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-white-100/40">
                  Emitido em {training.issuedAt}
                </p>
                <p className="relative mt-4 text-sm leading-relaxed text-white-100/65">
                  {training.skills}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://www.linkedin.com/in/diogo-dittmann-81648b295/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white-100 transition hover:border-brand/30 hover:text-brand"
          >
            Ver trajetória completa no LinkedIn
            <FaArrowUpRightFromSquare className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Education;
