/* eslint-disable @next/next/no-img-element */
import { testimonials } from "@/data";
import { FaQuoteLeft } from "react-icons/fa6";

const Clients = () => {
  return (
    <section className="relative py-20" id="depoimentos">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-glow/[0.045] blur-[120px]" />

      <div className="relative">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.28em] text-brand/70">
          Feedback profissional
        </p>
        <h1 className="heading">
          O que dizem meus <span className="text-brand">colegas de trabalho</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-white-100/70 md:text-base">
          Experiências compartilhadas por profissionais com quem tive a
          oportunidade de construir e evoluir.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group relative flex min-h-[28rem] flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-slate-950/55 p-6 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_22px_60px_-35px_rgba(34,211,238,0.45)] sm:p-7"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(34,211,238,0.10),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand/15 bg-brand/[0.06] text-brand/70 transition duration-500 group-hover:border-brand/30 group-hover:text-brand">
                    <FaQuoteLeft className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white-100/30">
                    Depoimento
                  </span>
                </div>

                <blockquote className="mt-7 flex flex-1 flex-col">
                  <p className="text-sm leading-[1.8] text-white-100/75 sm:text-[15px]">
                    “{testimonial.quote}”
                  </p>

                  <footer className="mt-auto flex items-center gap-4 border-t border-white/[0.08] pt-6">
                    <div className="rounded-full border border-brand/20 p-0.5">
                      <img
                        src={testimonial.img}
                        alt={`Foto de ${testimonial.name}`}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <cite className="block truncate text-sm font-bold not-italic text-white sm:text-base">
                        {testimonial.name}
                      </cite>
                      <p className="mt-1 text-xs text-white-100/50">
                        {testimonial.title}
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
