import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Seo from "../components/Seo.jsx";
import { SITE } from "../data/profile.js";

// ───────────── Edit these when your setup changes ─────────────
const LAST_UPDATED = "10 November 2026";
// Set to false (and remove the AdSense script from index.html) if you stop using Google AdSense.
const USES_ADSENSE = false;
// ─────────────────────────────────────────────────────────────

const ext = { target: "_blank", rel: "noopener noreferrer" };
const A = ({ href, children }) => (
  <a href={href} {...ext} className="text-accent-text underline underline-offset-4 hover:text-ink">
    {children}<span className="sr-only"> (opens in new tab)</span>
  </a>
);
const H2 = ({ children }) => <h2 className="mt-12 text-2xl sm:text-3xl">{children}</h2>;

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy | Burhan Ahmad"
        description="How this website handles your information: the project inquiry form, analytics, cookies and the third-party services it uses."
        path="/privacy"
      />
      <Header home={false} />
      <main className="container-page py-14 lg:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 text-[clamp(2.25rem,5vw,3.75rem)]">Privacy Policy</h1>
          <p className="mt-4 text-sm text-muted">Last updated: {LAST_UPDATED}</p>

          <div className="mt-8 space-y-4 leading-relaxed text-muted [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_strong]:font-semibold [&_strong]:text-ink">
            <p className="text-lg text-ink">
              This page explains, in plain language, what information this website collects, why, and who
              else handles it. I keep it short because I try to collect very little.
            </p>

            <H2>Who I am</H2>
            <p>
              This website belongs to {SITE.name}, a freelance web developer based in {SITE.location}. When this
              page says &ldquo;I&rdquo; or &ldquo;me&rdquo;, it means me. You can contact me at{" "}
              <a className="text-accent-text underline underline-offset-4 hover:text-ink" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>

            <H2>Information you give me</H2>
            <p>
              If you send a project inquiry through the contact form, I receive what you type into it: your
              name, your email address, your project type and project description, and, only if you choose to
              fill them in, your business name and budget. If you contact me by email or WhatsApp, I receive
              whatever you send and the contact details that come with it.
            </p>
            <p>
              I use this information only to reply to you, to discuss and quote your project, and to keep a
              record of our conversation. I don&rsquo;t sell it and I don&rsquo;t add you to a mailing list.
            </p>

            <H2>The AI assistant chat</H2>
            <p>
              If you use the portfolio assistant chat, the messages you type are sent through a server function
              to an AI service (Anthropic), which generates the reply. My server doesn&rsquo;t keep a copy of
              your messages. The AI provider processes them under its own policy, and replies can be
              inaccurate, so please don&rsquo;t include personal or sensitive details in the chat.
            </p>

            <H2>Information collected automatically</H2>
            <ul>
              <li>
                <strong>Analytics.</strong> I use Google Analytics to understand how the site is used: which pages
                are visited, roughly where visitors are from, and what device and browser they use. This relies on
                cookies or similar identifiers set by Google.
              </li>
              {USES_ADSENSE && (
                <li>
                  <strong>Advertising.</strong> This site loads Google AdSense. Google may use cookies to show
                  and measure ads. You can manage ad personalisation in your{" "}
                  <A href="https://adssettings.google.com">Google ad settings</A>.
                </li>
              )}
              <li>
                <strong>Technical logs.</strong> Like any website, the hosting provider receives technical data such
                as your IP address, browser type and the pages requested, in order to deliver and secure the site.
              </li>
            </ul>
            <p>The site itself doesn&rsquo;t set any cookies of its own and has no user accounts or payments.</p>

            <H2>Other services this site uses</H2>
            <p>Your browser may connect to these services when you use the site, and they receive technical data such as your IP address:</p>
            <ul>
              <li><strong>Netlify</strong> hosts the site and delivers contact-form submissions to me (<A href="https://www.netlify.com/privacy/">privacy policy</A>).</li>
              <li><strong>Google</strong> provides Analytics{USES_ADSENSE ? " and AdSense" : ""} (<A href="https://policies.google.com/privacy">privacy policy</A>).</li>
              <li><strong>Appwrite</strong> stores and serves the blog posts (<A href="https://appwrite.io/privacy">privacy policy</A>).</li>
              <li><strong>Anthropic</strong> provides the AI model behind the portfolio assistant chat (<A href="https://www.anthropic.com/legal/privacy">privacy policy</A>).</li>
              <li><strong>Cloudinary</strong> serves the project screenshots (<A href="https://cloudinary.com/privacy">privacy policy</A>).</li>
              <li><strong>WhatsApp</strong>, if you choose to message me there (<A href="https://www.whatsapp.com/legal/privacy-policy">privacy policy</A>).</li>
            </ul>
            <p>These companies have their own privacy policies, and I don&rsquo;t control how they handle data.</p>

            <H2>Cookies and your choices</H2>
            <p>
              You can block or delete cookies in your browser settings, and you can use the{" "}
              <A href="https://tools.google.com/dlpage/gaoptout">Google Analytics opt-out add-on</A>. The site
              still works without cookies.
            </p>

            <H2>How long I keep information</H2>
            <p>
              I keep project inquiries for as long as I need them to reply to you and to keep my business
              records, and I&rsquo;ll delete them earlier if you ask. Analytics data is kept according to the
              retention settings in my Google Analytics account.
            </p>

            <H2>Your rights</H2>
            <p>
              You can ask me what information I hold about you, ask me to correct it, or ask me to delete it.
              Email me at the address above and I&rsquo;ll respond as soon as I reasonably can.
            </p>

            <H2>Security</H2>
            <p>
              The site is served over HTTPS and I don&rsquo;t ask for sensitive information. No website can be
              guaranteed completely secure, so please don&rsquo;t send passwords or payment details through the
              contact form.
            </p>

            <H2>Children</H2>
            <p>This site is for businesses and isn&rsquo;t aimed at children, and I don&rsquo;t knowingly collect their information.</p>

            <H2>Links to other websites</H2>
            <p>This site links to other websites, such as GitHub, LinkedIn and my project demos. I&rsquo;m not responsible for their privacy practices.</p>

            <H2>Changes to this policy</H2>
            <p>If my setup changes, I&rsquo;ll update this page and the date at the top.</p>
          </div>
        </div>
      </main>
      <Footer home={false} />
    </>
  );
}
