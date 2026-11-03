import { PROCESS } from "../data/profile.js";

export default function Process() {
  return (
    <section id="process" className="section border-t border-line" aria-labelledby="process-title">
      <div className="container-page">
        <p className="eyebrow"><b>03</b>How I work</p>
        <h2 id="process-title" className="mt-5 max-w-3xl text-[clamp(2.25rem,4.6vw,3.75rem)]">A simple process, with no surprises</h2>
        <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((s, i) => (
            <li key={s.step} className="border-t border-ink pt-5">
              <span className="text-sm font-semibold tabular-nums text-accent-text">0{i + 1}</span>
              <h3 className="mt-6 text-3xl">{s.step}</h3>
              <p className="mt-3 max-w-[16rem] text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
