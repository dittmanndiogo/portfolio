import {
  FaArrowRight,
  FaChartLine,
  FaCloud,
  FaCode,
  FaLocationDot,
  FaUsers,
} from "react-icons/fa6";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML 5", "CSS"],
  },
  {
    title: "Backend & Cloud",
    skills: ["Node.js", "APIs", "PostgreSQL", "AWS", "PostgreSQL"],
  },
  {
    title: "Dados",
    skills: ["Python", "Pandas", "Machine Learning", "Data Science"],
  },
];

const principles = [
  {
    title: "Visão de produto",
    description: "Decisões técnicas conectadas aos objetivos do negócio.",
    icon: FaChartLine,
  },
  {
    title: "Colaboração",
    description: "Comunicação clara e construção próxima ao time.",
    icon: FaUsers,
  },
  {
    title: "Qualidade",
    description: "Soluções sustentáveis, seguras e preparadas para evoluir.",
    icon: FaCode,
  },
];

const Grid = () => {
  return (
    <section className="relative py-20" id="sobre">
      <div className="pointer-events-none absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-brand-glow/[0.04] blur-[110px]" />

      <div className="relative">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.28em] text-brand/70">
          Um pouco sobre mim
        </p>
        <h1 className="heading">
          Tecnologia com <span className="text-brand">visão de negócio</span>
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-6">
          <article className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-slate-950/55 p-7 backdrop-blur-sm transition duration-500 hover:border-brand/25 lg:col-span-4 lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(34,211,238,0.10),transparent_40%)] opacity-60" />

            <div className="relative flex h-full flex-col">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-white-100/50">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2">
                  <FaLocationDot className="text-brand" />
                  Curitiba, Brasil
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand/[0.05] px-3 py-2 text-brand/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_8px_rgba(94,234,212,0.8)]" />
                  Full Stack Developer
                </span>
              </div>

              <div className="mt-10 max-w-3xl lg:mt-16">
                <FaCloud className="mb-6 h-7 w-7 text-brand/80" aria-hidden="true" />
                <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                  Construo produtos digitais conectando interface, backend,
                  dados e nuvem.
                </h2>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white-100/70 sm:text-base">
                  Minha experiência une desenvolvimento de software e gestão.
                  Isso me ajuda a entender o contexto antes de escrever código,
                  colaborar com diferentes áreas e transformar necessidades em
                  soluções que funcionam no dia a dia.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-white/[0.08] bg-slate-950/40 p-6 lg:col-span-2 lg:p-7">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/70">
              Como trabalho
            </span>
            <div className="mt-6 divide-y divide-white/[0.08]">
              {principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <div key={principle.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand/15 bg-brand/[0.05] text-brand">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{principle.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white-100/55">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="rounded-3xl border border-white/[0.08] bg-slate-950/40 p-6 lg:col-span-4 lg:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/70">
                  Stack principal
                </span>
                <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  Ferramentas que uso para construir
                </h2>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white-100/45">
                    {group.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs font-medium text-white-100/75 transition hover:border-brand/20 hover:text-brand"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl border border-brand/15 bg-brand/[0.045] p-7 lg:col-span-2">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand/10 blur-3xl transition duration-500 group-hover:bg-brand/15" />
            <div className="relative flex h-full min-h-52 flex-col">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/70">
                Vamos conversar
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-tight text-white">
                Tem uma ideia ou um desafio em mente?
              </h2>
              <a
                href="mailto:dittmanndiogo1996@gmail.com"
                className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-brand transition hover:text-white"
              >
                Entre em contato
                <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Grid;
