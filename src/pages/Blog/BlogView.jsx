import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Client, Databases, Query } from "appwrite";
import DOMPurify from "dompurify";

import BlogNavbar from '../../components/Blog/BlogNavbar';
import BlogFooter from '../../components/Blog/BlogFooter';

const BlogView = () => {

  const [Blog, setBlog] = useState([])
  const { id } = useParams()

  // console.log(id)

  function fetchBlog() {
    try {
      const client = new Client()
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("67c6bd2300386b359d55")

      const databases = new Databases(client);

      let promise = databases.listDocuments(
        "67c7d35200340bef1c78",
        "67c7d35d0021fa48e045",
        [
          Query.equal('blog_id', parseInt(id))
        ]
      );

      promise.then(function (response) {
        // console.log(response.documents);
        setBlog(response.documents);
      }, function (error) {
        console.log(error);
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div>
      <BlogNavbar />
      {Blog.map((Blog, index) => (
        <div key={index} className='mb-10'>
          <div className="container mx-auto p-4">
            <div className="bg-white rounded-lg shadow-md p-0 sm:p-6">
              <p className="text-gray-600 mb-4">Published by {Blog.author_name} on {new Date(Blog.date_published).toLocaleDateString()}</p>
              <div className="mt-5 text-xl">
                {/* Render HTML content using dangerouslySetInnerHTML */}
                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(Blog.html_content) }} />
              </div>
            </div>
          </div>
        </div>
      ))}
      <BlogFooter />
    </div>
  )
}

export default BlogView
