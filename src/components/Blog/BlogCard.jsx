import { Client, Databases } from "appwrite";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

const BlogCard = () => {

    const [BlogPosts, setBlogPosts] = useState([])

    function fetchBlogs() {
        try {
            const client = new Client()
                .setEndpoint("https://cloud.appwrite.io/v1")
                .setProject("67c6bd2300386b359d55")

            const databases = new Databases(client);

            let promise = databases.listDocuments(
                "67c7d35200340bef1c78",
                "67c7d35d0021fa48e045",
                []
            );

            promise.then(function (response) {
                // console.log(response.documents);
                setBlogPosts(response.documents);
            }, function (error) {
                console.log(error);
            });
        } catch (error) {
            console.error(error);
        }
    }

    const encodeTitle = (title) => {
        return title
            .trim()
            .replace(/\s+/g, '-')      // Replace spaces with hyphens
            .replace(/[^\w\-]+/g, ''); // Remove all non-word characters (except hyphens)
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-semibold tracking-tight text-pretty text-amber-900 sm:text-5xl">Blogs</h2>
                    <p className="mt-2 text-lg/8 text-amber-600">Learn how to grow your business with our expert advice.</p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-amber-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {BlogPosts.map((post, index) => (
                        <article key={index} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.date_published} className="text-amber-500">
                                    {post.date_published}
                                </time>
                                <a
                                    href="#"
                                    className="relative z-10 rounded-full bg-amber-50 px-3 py-1.5 font-medium text-amber-600 hover:bg-amber-100"
                                >
                                    Blog Category {/* Replace with dynamic category if available */}
                                </a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg/6 font-semibold text-amber-900 group-hover:text-amber-600">
                                    <Link to={`/blog/${encodeTitle(post.title)}/${post.blog_id}`} className="relative z-10">
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </Link>
                                </h3>
                                <div className="mt-5 line-clamp-3 text-sm/6 text-amber-600 overflow-hidden">
                                    {/* Render HTML content using dangerouslySetInnerHTML */}
                                    <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.html_content) }} />
                                </div>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img alt="" src={post.author_image || 'https://media.licdn.com/dms/image/v2/D4D03AQGEbM1ohuv_UQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729061155817?e=1746662400&v=beta&t=TJGrtS9MoE30ivcbJtfwuAij39kqY6YjZTeZjZtKUzU'} className="object-cover object-bottom size-10 rounded-full bg-amber-50" />
                                <div className="text-sm/6">
                                    <p className="font-semibold text-amber-900">
                                        {post.author_name}
                                    </p>
                                    <p className="text-amber-600">Founder / Developer</p>
                                </div>
                            </div>
                        </article>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default BlogCard;
