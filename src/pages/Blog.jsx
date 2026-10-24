import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Seo from "../components/Seo.jsx";
import { listPosts, slugify } from "../lib/appwrite.js";

export default function Blog() {
  const [state, setState] = useState({ status: "loading", posts: [] });

  useEffect(() => {
    let cancelled = false;
    listPosts()
      .then((posts) => !cancelled && setState({ status: "ready", posts }))
      .catch(() => !cancelled && setState({ status: "error", posts: [] }));
    return () => { cancelled = true; };
  }, []);

  return (
    <>
      <Seo title="Blog | Burhan Ahmad" description="Articles by Burhan Ahmad, a full stack developer." path="/blog" />
      <Header home={false} />
      <main className="container-page min-h-[60vh] py-14">
        <h1 className="text-4xl font-bold">Blog</h1>
        <div role="status" aria-live="polite" className="mt-8">
          {state.status === "loading" && <p className="text-muted">Loading posts…</p>}
          {state.status === "error" && <p className="text-muted">Posts couldn&rsquo;t be loaded right now. Please try again later.</p>}
          {state.status === "ready" && state.posts.length === 0 && <p className="text-muted">No posts yet.</p>}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {state.posts.map((post) => (
            <article key={post.$id} className="card p-5">
              <time dateTime={post.date_published} className="text-sm text-muted">
                {post.date_published ? new Date(post.date_published).toLocaleDateString("en-GB", { dateStyle: "medium" }) : ""}
              </time>
              <h2 className="mt-2 text-xl font-semibold">
                <Link className="hover:text-secondary" to={`/blog/${slugify(post.blog_URI)}`}>{post.title}</Link>
              </h2>
              <div className="mt-3 line-clamp-3 text-muted"
                   dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.html_description ?? "") }} />
            </article>
          ))}
        </div>
      </main>
      <Footer home={false} />
    </>
  );
}
