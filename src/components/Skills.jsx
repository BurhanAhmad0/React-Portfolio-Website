import { SKILLS } from "../data/profile.js";

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-line" aria-labelledby="skills-title">
      <div className="container-page">
        <p className="eyebrow">Skills</p>
        <h2 id="skills-title" className="mt-3 text-3xl font-bold sm:text-4xl">Technologies I work with</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((g) => (
            <div key={g.group} className="card p-5">
              <h3 className="text-base font-semibold text-secondary">{g.group}</h3>
              <ul className="mt-4 space-y-2 text-muted">
                {g.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
