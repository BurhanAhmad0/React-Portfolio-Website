import { SITE } from "../data/profile.js";

export default function About() {
  return (
    <section id="about" className="section border-t border-line" aria-labelledby="about-title">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">About</p>
          <h2 id="about-title" className="mt-3 text-3xl font-bold sm:text-4xl">
            Building reliable products, end to end
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            I&rsquo;m a full-stack web developer working with Next.js, React, Node.js, Express and
            MongoDB. I care about fast, secure and scalable applications, and about interfaces that
            stay clear on every screen size.
          </p>
          <p>
            Since 2023 I&rsquo;ve been freelancing: building responsive sites for local businesses
            and full-stack apps with authentication and real-time features, handling everything
            from branding to deployment. I&rsquo;m the founder of Codiqon, where I help businesses
            get online, and I&rsquo;m especially interested in e-commerce, web performance and
            AI-driven automation.
          </p>
          <p>
            I&rsquo;m currently completing a BS in Computer Science at the University of Central
            Punjab. Based in {SITE.location}; I speak English, Urdu and Punjabi.
          </p>
        </div>
      </div>
    </section>
  );
}
