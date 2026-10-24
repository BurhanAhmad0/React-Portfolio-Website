import { FaGithub } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { PROJECTS } from "../data/profile.js";

function ProjectCard({ p }) {
  return (
    <article className="card flex flex-col overflow-hidden">
      <div className="aspect-[16/10] overflow-hidden bg-primary">
        <img src={p.image} alt={p.imageAlt} width="800" height="500" loading="lazy" decoding="async"
             className="h-full w-full object-cover object-top" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-secondary">{p.kind}</p>
        <h3 className="mt-1 text-xl font-bold">{p.title}</h3>
        <p className="mt-3 text-muted">{p.summary}</p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted marker:text-secondary">
          {p.features.map((f) => <li key={f}>{f}</li>)}
        </ul>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {p.tags.map((t) => <li key={t} className="tag">{t}</li>)}
        </ul>
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {p.live && (
            <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary !min-h-10 !py-2 text-sm">
              Live demo <MdOutlineArrowOutward aria-hidden="true" />
              <span className="sr-only">of {p.title} (opens in new tab)</span>
            </a>
          )}
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !min-h-10 !py-2 text-sm">
              <FaGithub aria-hidden="true" /> Source
              <span className="sr-only"> code of {p.title} (opens in new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section border-t border-line" aria-labelledby="projects-title">
      <div className="container-page">
        <p className="eyebrow">Projects</p>
        <h2 id="projects-title" className="mt-3 text-3xl font-bold sm:text-4xl">Selected work</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Full-stack applications I&rsquo;ve designed, built and deployed.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}
