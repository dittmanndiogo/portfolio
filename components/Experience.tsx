/* eslint-disable @next/next/no-img-element */
import { workExperience } from "@/data";

const Experience = () => {
  return (
    <section className="relative py-20" id="testimonials">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-glow/[0.06] blur-[110px]" />

      <div className="relative">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.28em] text-brand/70">
          Minha trajetória
        </p>
        <h1 className="heading">
          Experiência <span className="text-brand">profissional</span>
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {workExperience.map((card) => (
            <article
              key={card.id}
              className="group relative isolate min-h-64 overflow-hidden rounded-3xl border border-white/[0.08] bg-slate-950/60 p-6 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_20px_60px_-30px_rgba(34,211,238,0.35)] sm:p-8"
            >
              <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_100%_0%,rgba(34,211,238,0.10),transparent_38%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-8 top-0 h-px -z-10 bg-gradient-to-r from-transparent via-brand/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex h-full flex-col gap-6 sm:flex-row sm:items-center">
                <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-brand/15 bg-brand/[0.05] transition duration-500 group-hover:border-brand/30 group-hover:bg-brand/[0.09] sm:h-28 sm:w-28">
                  <div className="absolute inset-3 rounded-xl bg-brand/10 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <img
                    src={card.thumbnail}
                    alt=""
                    aria-hidden="true"
                    className="relative h-16 w-16 object-contain transition-transform duration-500 group-hover:scale-110 sm:h-20 sm:w-20"
                  />
                </div>

                <div className="flex flex-1 flex-col items-start">
                  <h2 className="max-w-md text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-brand sm:text-2xl">
                    {card.title}
                  </h2>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-white-100/75 sm:text-base">
                    {card.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
