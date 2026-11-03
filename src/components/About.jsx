import { FACTS, LINKS, SITE } from "../data/profile.js";

export default function About() {
  return (
    <section id="about" className="section border-t border-line" aria-labelledby="about-title">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <p className="eyebrow"><b>04</b>About</p>
          <h2 id="about-title" className="mt-5 text-[clamp(2.25rem,4.6vw,3.75rem)]">A developer who cares about the practical details</h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="space-y-5 text-lg leading-relaxed text-muted lg:text-xl">
            <p className="text-ink">
              I&rsquo;m {SITE.name}, a full-stack web developer from {SITE.location}. I build with
              JavaScript, React, Node.js, Express and MongoDB.
            </p>
            <p>
              I like problems that real businesses have: a page that tells visitors what they need to
              know, a form that actually reaches the owner, a layout that works on a phone.
            </p>
            <p>
              I&rsquo;m early in my career and still studying, so I keep projects focused, explain my
              decisions in plain language, and tell you early if something is outside what I can deliver
              well. You will always know what is being built and when.
            </p>
          </div>
          <a href={LINKS.resume} target="_blank" rel="noopener" className="link-arrow mt-6">
            Download my resume (PDF)<span className="sr-only"> (opens in new tab)</span>
          </a>
        </div>
        <dl className="grid border-t border-ink sm:grid-cols-2 lg:col-span-12 lg:grid-cols-5 lg:gap-x-8">
          {FACTS.map(([k, v]) => (
            <div key={k} className="border-b border-line py-5 lg:border-b-0">
              <dt className="text-[0.8125rem] font-medium text-muted">{k}</dt>
              <dd className="mt-1.5 text-[0.95rem]">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
