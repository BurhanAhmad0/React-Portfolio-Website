import { SITE } from "../data/profile.js";

/** Per-route head tags. React 19 hoists <title>/<meta>/<link> into <head> automatically. */
export default function Seo({ title, description, path = "/", noindex = false }) {
  const url = `${SITE.url}${path}`;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}
    </>
  );
}
