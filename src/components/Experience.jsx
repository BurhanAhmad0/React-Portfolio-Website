import { EDUCATION, EXPERIENCE } from "../data/profile.js";

function Entry({ e }) {
  return (
    <li className="card p-5">
      <h4 className="font-semibold">{e.title}</h4>
      <p className="text-sm text-secondary">{e.org}</p>
      <p className="text-sm text-muted">{e.period}</p>
      {e.points && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted marker:text-secondary">
          {e.points.map((p) => <li key={p}>{p}</li>)}
        </ul>
      )}
    </li>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section border-t border-line" aria-labelledby="exp-title">
      <div className="container-page">
        <p className="eyebrow">Experience</p>
        <h2 id="exp-title" className="mt-3 text-3xl font-bold sm:text-4xl">Experience &amp; education</h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Experience</h3>
            <ul className="space-y-4">{EXPERIENCE.map((e) => <Entry key={e.title} e={e} />)}</ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Education</h3>
            <ul className="space-y-4">{EDUCATION.map((e) => <Entry key={e.title} e={e} />)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
