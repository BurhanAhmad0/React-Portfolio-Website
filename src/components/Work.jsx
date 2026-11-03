import { PROJECTS } from "../data/profile.js";

/* Full class names (not built dynamically) so Tailwind can see them. */
const LAYOUTS = {
  wide:  { wrap: "",                                  image: "",                                  text: "mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8", head: "lg:col-span-4", body: "lg:col-span-7 lg:col-start-6", ratio: "aspect-[16/10] lg:aspect-[16/9]" },
  left:  { wrap: "lg:grid lg:grid-cols-12 lg:gap-8", image: "lg:col-span-8",                      text: "mt-8 lg:col-span-4 lg:mt-0",                head: "",              body: "mt-6",                          ratio: "aspect-[16/10]" },
  right: { wrap: "lg:grid lg:grid-cols-12 lg:gap-8", image: "lg:col-span-8 lg:col-start-5 lg:row-start-1", text: "mt-8 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0", head: "", body: "mt-6", ratio: "aspect-[16/10]" },
};

function CaseStudy({ p, index }) {
  const L = LAYOUTS[p.layout] ?? LAYOUTS.left;
  const wide = p.layout === "wide";
  const head = (
    <div className={L.head}>
      <p className="text-[0.8125rem] font-medium text-muted"><span className="mr-3 font-semibold tabular-nums text-accent-text">{String(index + 1).padStart(2, "0")}</span>{p.category}</p>
      <h3 id={`${p.id}-title`} className="mt-3 text-[clamp(2rem,4vw,3.25rem)]">{p.title}</h3>
      <p className="mt-3 inline-block border border-line-strong px-2.5 py-1 text-xs font-medium text-muted">{p.status}</p>
    </div>
  );
  const body = (
    <div className={L.body}>
      <dl className={`space-y-6 text-[0.95rem] leading-relaxed ${wide ? "md:grid md:grid-cols-2 md:gap-x-10 md:space-y-0 md:gap-y-6" : ""}`}>
        <div><dt className="font-semibold">The goal</dt><dd className="mt-1 text-muted">{p.goal}</dd></div>
        <div><dt className="font-semibold">My part</dt><dd className="mt-1 text-muted">{p.contribution}</dd></div>
        <div>
          <dt className="font-semibold">What it does</dt>
          <dd className="mt-1"><ul className="space-y-1.5 text-muted">{p.built.map((b) => <li key={b} className="flex gap-3"><span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />{b}</li>)}</ul></dd>
        </div>
        <div><dt className="font-semibold">Built with</dt><dd className="tag mt-1">{p.tech.join(", ")}</dd></div>
      </dl>
      <div className="mt-6 flex flex-wrap gap-x-8">
        {p.live && (
          <a href={p.live} target="_blank" rel="noopener noreferrer" className="link-arrow">
            View live site<span aria-hidden="true"> ↗</span><span className="sr-only"> of {p.title} (opens in new tab)</span>
          </a>
        )}
        {p.repo && (
          <a href={p.repo} target="_blank" rel="noopener noreferrer" className="link-arrow">
            Source code<span aria-hidden="true"> ↗</span><span className="sr-only"> of {p.title} on GitHub (opens in new tab)</span>
          </a>
        )}
      </div>
    </div>
  );
  const image = (
    <div className={`shot ${L.ratio}`}>
      <img src={p.image} alt={p.imageAlt} width="1000" height="625" loading="lazy" decoding="async" />
    </div>
  );

  return (
    <article className="group border-t border-line py-14 first:border-t-0 first:pt-0 lg:py-20 lg:first:pt-0" aria-labelledby={`${p.id}-title`}>
      {wide ? (
        <>{image}<div className={L.text}>{head}{body}</div></>
      ) : (
        <div className={L.wrap}>
          <div className={L.image}>{image}</div>
          <div className={L.text}>{head}{body}</div>
        </div>
      )}
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="section border-t border-line" aria-labelledby="work-title">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <p className="eyebrow"><b>02</b>Selected work</p>
            <h2 id="work-title" className="mt-5 text-[clamp(2.25rem,4.6vw,3.75rem)]">Projects I&rsquo;ve designed and built</h2>
          </div>
          <p className="max-w-sm self-end text-muted lg:col-span-4 lg:col-start-9">
            These are my own projects, not paid client work, and each is labelled that way. They show how
            I build, from the interface to the server.
          </p>
        </div>
        <div className="mt-14 lg:mt-20">{PROJECTS.map((p, i) => <CaseStudy key={p.id} p={p} index={i} />)}</div>
      </div>
    </section>
  );
}
