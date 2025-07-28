import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { getPostData } from '@/lib/blogData';
import type { PostData } from '@/types';

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
        className="h-[25vh] w-screen bg-center bg-cover flex items-center justify-start mt-16" 
        id="hero"
        style={{ backgroundImage: `url('${postData.image}')` }}
      >
        <div className="bg-white px-4 py-3 pb-4 w-fit text-5xl font-extrabold ms-6 me-6">
          <span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">
            {postData.title}
          </span>
        </div>
      </div>

      <div className="w-screen flex items-center justify-center">
        <div className="w-3/4 sm:w-1/2">
          <div id="about" className="py-20 gap-12">
            <p className="text-start mb-10 text-neutral-400">
              on {new Date(postData.date).toLocaleDateString('en-gb', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </p>
            
            <article 
              className="prose max-w-none" 
              dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} 
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
