import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Seo from "../components/Seo.jsx";
import { BlogPostSkeleton } from "../components/Skeletons.jsx";
import { getPost } from "../lib/appwrite.js";

export default function BlogPost() {
  const { title: slug } = useParams();
  const [state, setState] = useState({ status: "loading", post: null });

  useEffect(() => {
    let cancelled = false;
    setState({ status: "loading", post: null });
    getPost(slug)
      .then(
        (post) =>
          !cancelled && setState({ status: post ? "ready" : "missing", post }),
      )
      .catch(() => !cancelled && setState({ status: "error", post: null }));
    return () => {
      cancelled = true;
    };
  }, [slug]);

  const { status, post } = state;
  return (
    <>
      <Seo
        title={post ? `${post.title} | Burhan Ahmad` : "Blog | Burhan Ahmad"}
        description={
          post?.title
            ? `${post.title}, an article by Burhan Ahmad.`
            : "An article by Burhan Ahmad."
        }
        path={`/blog/${slug}`}
        noindex={status === "missing" || status === "error"}
      />
      <Header home={false} />
      <main className="container-page min-h-[60vh] py-14">
        <Link to="/blog" className="text-sm text-muted hover:text-accent-text">
          &larr; All posts
        </Link>
        <div role="status" aria-live="polite" className="mt-6">
          {status === "loading" && (
            <span className="sr-only">Loading post…</span>
          )}
          {status === "missing" && (
            <p className="text-muted">This post could not be found.</p>
          )}
          {status === "error" && (
            <p className="text-muted">
              The post couldn&rsquo;t be loaded right now. Please try again
              later.
            </p>
          )}
        </div>
        {status === "loading" && <BlogPostSkeleton />}
        {post && (
          <article className="mt-4">
            <h1 className="text-4xl sm:text-5xl">{post.title}</h1>
            <p className="mt-3 text-sm text-muted">
              {post.author_name ? `By ${post.author_name}` : ""}
              {post.date_published
                ? ` · ${new Date(post.date_published).toLocaleDateString("en-GB", { dateStyle: "long" })}`
                : ""}
            </p>

            <div
              className="
                  article-content
                  mt-8
                  space-y-4
                  text-lg
                  leading-relaxed
                  text-muted

                  [&_p]:mb-4

                  [&_ul]:my-5
                  [&_ul]:list-disc
                  [&_ul]:pl-8

                  [&_ol]:my-5
                  [&_ol]:list-decimal
                  [&_ol]:pl-8

                  [&_li]:mb-3
                  [&_li]:pl-1
                  [&_li]:list-item

                  [&_strong]:font-semibold
                  [&_strong]:text-ink

                  [&_a]:text-accent-text
                  [&_a]:underline

                  [&_h2]:mt-8
                  [&_h2]:text-2xl
                  [&_h2]:font-semibold
                  [&_h2]:text-ink

                  [&_h3]:mt-6
                  [&_h3]:text-xl
                  [&_h3]:font-semibold
                  [&_h3]:text-ink

                  [&_table]:my-6
                  [&_table]:w-full
                  [&_table]:border-collapse

                  [&_th]:border
                  [&_th]:p-3
                  [&_th]:text-left

                  [&_td]:border
                  [&_td]:p-3

                  [&_img]:h-auto
                  [&_img]:max-w-full

                  [&_pre]:overflow-x-auto
                "
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.html_content ?? ""),
              }}
            />
          </article>
        )}
      </main>
      <Footer home={false} />
    </>
  );
}
