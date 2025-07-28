import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { getSortedPostsData } from '@/lib/blogData';
import type { PostData } from '@/types';

export default function Press() {
  const navigate = useNavigate();
  const allPostsData: PostData[] = getSortedPostsData();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Layout title="Press centre">
      <div className="h-[30vh] w-screen bg-hero5 bg-center bg-cover relative flex items-center" id="hero">
        <div className="ps-20 text-5xl sm:text-8xl font-extrabold">
          <div className="bg-white px-4 py-3 pb-4 w-fit">
            <span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">
              press centre.
            </span>
          </div>
        </div>
      </div>

      <div className="w-screen flex items-center justify-center">
        <div className="w-3/4">
          <div id="about" className="py-20 grid sm:grid-cols-2 gap-12">
            <div className="grid md:grid-cols-3 gap-4">
              <div></div>
              <div className="col-span-2">
                <span className="font-bold text-neutral-700 text-4xl text-start">transparency and honesty.</span>
                <div className="flex justify-start items-start mt-3">
                  <p>We provide up-to-date information on the company and its events to our followers and the media here via our blog. For more information, you can contact us using the details in the page footer.</p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {allPostsData.map((post) => (
                <button 
                  key={`${post.date}-${post.slug}`}
                  className="hover:bg-primary-100 w-full" 
                  onClick={() => handleNavigate(`/press/${post.date}/${post.slug}`)}
                >
                  <div className="w-full h-36 relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-1 py-4 flex flex-col items-start">
                    <span className="font-extrabold text-neutral-700 text-xl text-start">{post.title.toLowerCase()}</span>
                    <p className="text-start my-1 text-neutral-400">
                      on {new Date(post.date).toLocaleDateString('en-gb', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                    <Link 
                      to={`/press/${post.date}/${post.slug}`} 
                      className="font-bold hover:underline text-primary-600 decoration-primary-600 decoration-2 underline-offset-[5px]"
                    >
                      Read more...
                    </Link>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
