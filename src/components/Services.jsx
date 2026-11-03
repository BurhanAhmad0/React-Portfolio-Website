import { SERVICES } from "../data/profile.js";

export default function Services() {
  return (
    <section id="services" className="section border-t border-line" aria-labelledby="services-title">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <p className="eyebrow"><b>01</b>Services</p>
          <h2 id="services-title" className="mt-5 text-[clamp(2.25rem,4.6vw,3.75rem)]">What I can do for your business</h2>
          <p className="mt-6 max-w-xs text-muted">
            A focused set of services I can deliver myself. Not sure which one you need? Describe the
            problem and I&rsquo;ll tell you honestly what fits.
          </p>
        </div>
        <ol className="lg:col-span-7 lg:col-start-6">
          {SERVICES.map((s) => (
            <li key={s.title} className="grid gap-5 border-t border-line py-9 first:border-t-0 first:pt-0 md:grid-cols-[1fr_1.1fr] md:gap-10 lg:first:pt-1">
              <div>
                <h3 className="text-2xl sm:text-[1.75rem]">{s.title}</h3>
              </div>
              <div>
                <p className="text-muted">{s.text}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3"><span aria-hidden="true" className="mt-[0.55em] h-px w-3 shrink-0 bg-accent" />{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
