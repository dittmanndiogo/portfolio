/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data";
import {
  FaArrowUpRightFromSquare,
  FaCodeFork,
  FaGithub,
  FaStar,
} from "react-icons/fa6";

const GITHUB_USERNAME = "dittmanndiogo";
const EXCLUDED_REPOSITORIES = new Set(["portfolio"]);

type GithubRepository = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
};

const getGithubRepositories = async (): Promise<GithubRepository[]> => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 60 * 60 * 12 },
      },
    );

    if (!response.ok) return [];

    const repositories = (await response.json()) as GithubRepository[];

    return repositories
      .filter(
        (repository) =>
          !repository.fork &&
          !repository.archived &&
          !EXCLUDED_REPOSITORIES.has(repository.name.toLowerCase()),
      )
      .sort(
        (first, second) =>
          new Date(second.pushed_at).getTime() -
          new Date(first.pushed_at).getTime(),
      )
      .slice(0, 6);
  } catch {
    return [];
  }
};

const RecentProjects = async () => {
  const repositories = await getGithubRepositories();

  return (
    <section className="relative py-14 lg:py-20" id="projetos">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-glow/[0.04] blur-[120px]" />

      <div className="relative">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.28em] text-brand/70">
          Trabalho selecionado
        </p>
        <h1 className="heading">
          Alguns dos meus <span className="text-brand">projetos recentes</span>
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects.map(({ id, title, des, img }) => (
            <article
              key={id}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-slate-950/60 p-4 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_22px_60px_-35px_rgba(34,211,238,0.45)] sm:p-5"
            >
              <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-[#071827] sm:h-64">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(34,211,238,0.16),transparent_58%)]" />
                <img
                  src="/bg.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover opacity-30"
                />
                <img
                  src={img}
                  alt={`Prévia de ${title}`}
                  className="relative z-10 max-h-[88%] w-[92%] object-contain transition-transform duration-700 group-hover:scale-[1.035]"
                />
              </div>

              <div className="p-2 pb-1 pt-6 sm:p-3 sm:pb-2 sm:pt-7">
                <h2 className="text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-brand sm:text-2xl">
                  {title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white-100/70 sm:text-base">
                  {des}
                </p>
              </div>
            </article>
          ))}
        </div>

        {repositories.length > 0 && (
          <div className="mt-20">
            <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Repositórios no GitHub
                </h2>
              </div>
              <a
                href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white-100 transition hover:text-brand"
              >
                <FaGithub className="h-5 w-5" />
                Ver todos os repositórios
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {repositories.map((repository) => (
                <a
                  key={repository.id}
                  href={repository.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="group/repo flex min-h-52 flex-col rounded-2xl border border-white/[0.08] bg-slate-950/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-slate-950/70"
                >
                  <div className="flex items-start justify-between gap-4">
                    <FaGithub className="h-6 w-6 text-brand" />
                    <FaArrowUpRightFromSquare className="h-3.5 w-3.5 text-white/30 transition group-hover/repo:text-brand" />
                  </div>
                  <h3 className="mt-5 break-words text-lg font-bold text-white transition group-hover/repo:text-brand">
                    {repository.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white-100/60">
                    {repository.description ?? "Projeto disponível no GitHub."}
                  </p>

                  <div className="mt-auto flex items-center gap-4 pt-6 text-xs text-white-100/55">
                    {repository.language && (
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-brand" />
                        {repository.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <FaStar /> {repository.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCodeFork /> {repository.forks_count}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentProjects;
