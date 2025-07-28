import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { getPostData } from "@/lib/blogData";
import type { PostData } from "@/types";

export default function Post() {
  const { date, slug } = useParams<{ date: string; slug: string }>();
  const [postData, setPostData] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostData = () => {
      if (date && slug) {
        const post = getPostData(date, slug);
        setPostData(post);
      }
      setLoading(false);
    };

    fetchPostData();
  }, [date, slug]);

  if (loading) {
    return (
      <Layout title="Loading...">
        <div className="w-screen flex items-center justify-center h-64">
          <div className="text-center">
            <p className="text-lg">Loading post...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!postData) {
    return (
      <Layout title="Post Not Found">
        <div className="w-screen flex items-center justify-center h-64">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
            <p>The requested post could not be found.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={postData.title}>
      <div
        className="h-[35vh] w-screen bg-center bg-cover flex items-center justify-start relative overflow-hidden"
        id="hero"
        style={{ backgroundImage: `url('${postData.image}')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="bg-white/95 backdrop-blur-sm px-8 py-6 pb-7 w-fit text-4xl sm:text-5xl font-extrabold ms-8 me-8 rounded-2xl shadow-2xl z-10 border border-white/20">
          <span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">
            {postData.title}
          </span>
        </div>
      </div>

      <div className="w-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-white">
        <div className="w-3/4 sm:w-1/2">
          <div id="about" className="py-28 space-y-10">
            <p className="text-start text-neutral-400 text-xl font-light">
              on{" "}
              {new Date(postData.date).toLocaleDateString("en-gb", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>

            <article
              className="prose prose-xl max-w-none prose-headings:text-neutral-700 prose-p:text-neutral-600 prose-p:leading-relaxed prose-p:font-light prose-headings:font-bold prose-a:text-primary-600 prose-a:decoration-primary-600 prose-a:decoration-2 prose-a:underline-offset-4 hover:prose-a:text-primary-700"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
