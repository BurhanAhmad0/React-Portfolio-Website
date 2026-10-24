import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";

export default function NotFound() {
  return (
    <main className="container-page flex min-h-screen flex-col items-start justify-center py-20">
      <Seo title="Page not found | Burhan Ahmad" description="This page does not exist." noindex />
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl font-bold">Page not found</h1>
      <p className="mt-4 text-muted">The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.</p>
      <Link to="/" className="btn btn-primary mt-8">Back to home</Link>
    </main>
  );
}
