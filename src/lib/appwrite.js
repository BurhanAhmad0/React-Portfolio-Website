import { Client, Databases, Query } from "appwrite";

// These identifiers are public by design (they ship to every browser); access is controlled by
// Appwrite collection permissions. Override with VITE_* variables if they ever change.
const ENDPOINT =
  import.meta.env.VITE_APPWRITE_ENDPOINT || "https://sgp.cloud.appwrite.io/v1";
const PROJECT = import.meta.env.VITE_APPWRITE_PROJECT || "6aeb1ae4002092ab9fa2";
const DATABASE =
  import.meta.env.VITE_APPWRITE_DATABASE || "67c7d35200340bef1c78";
const COLLECTION =
  import.meta.env.VITE_APPWRITE_COLLECTION || "67c7d35d0021fa48e045";

export const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT);
const databases = new Databases(client);

export const slugify = (title) =>
  title
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
export const unslug = (slug) => slug.replace(/-/g, " ").trim();

export async function listPosts() {
  const res = await databases.listDocuments(DATABASE, COLLECTION, []);
  return res.documents;
}

export async function getPost(slug) {
  const res = await databases.listDocuments(DATABASE, COLLECTION, [
    Query.equal("blog_URI", unslug(slug)),
  ]);
  return res.documents[0] ?? null;
}
