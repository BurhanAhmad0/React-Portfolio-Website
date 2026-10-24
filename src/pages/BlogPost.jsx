import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Seo from "../components/Seo.jsx";
import { getPost } from "../lib/appwrite.js";

export default function BlogPost() {
  const { title: slug } = useParams();
  const [state, setState] = useState({ status: "loading", post: null });

  useEffect(() => {
    let cancelled = false;
    setState({ status: "loading", post: null });
    getPost(slug)
      .then((post) => !cancelled && setState({ status: post ? "ready" : "missing", post }))
      .catch(() => !cancelled && setState({ status: "error", post: null }));
    return () => { cancelled = true; };
  }, [slug]);

  const { status, post } = state;
  return (
    <>
      <Seo
        title={post ? `${post.title} | Burhan Ahmad` : "Blog | Burhan Ahmad"}
        description={post?.title ? `${post.title}, an article by Burhan Ahmad.` : "An article by Burhan Ahmad."}
        path={`/blog/${slug}`}
        noindex={status === "missing" || status === "error"}
      />
      <Header home={false} />
      <main className="container-page min-h-[60vh] py-14">
        <Link to="/blog" className="text-sm text-muted hover:text-secondary">&larr; All posts</Link>
        <div role="status" aria-live="polite" className="mt-6">
          {status === "loading" && <p className="text-muted">Loading…</p>}
          {status === "missing" && <p className="text-muted">This post could not be found.</p>}
          {status === "error" && <p className="text-muted">The post couldn&rsquo;t be loaded right now. Please try again later.</p>}
        </div>
        {post && (
          <article className="mt-4">
            <h1 className="text-3xl font-bold sm:text-4xl">{post.title}</h1>
            <p className="mt-3 text-sm text-muted">
              {post.author_name ? `By ${post.author_name}` : ""}
              {post.date_published ? ` · ${new Date(post.date_published).toLocaleDateString("en-GB", { dateStyle: "long" })}` : ""}
            </p>
            <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted [&_a]:text-secondary [&_a]:underline [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-white [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white [&_img]:h-auto [&_img]:max-w-full [&_pre]:overflow-x-auto"
                 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.html_content ?? "") }} />
          </article>
        )}
      </main>
      <Footer home={false} />
    </>
  );
}
