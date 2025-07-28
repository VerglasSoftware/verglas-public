import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { getSortedPostsData } from "@/lib/blogData";
import type { PostData } from "@/types";

export default function Press() {
  const navigate = useNavigate();
  const allPostsData: PostData[] = getSortedPostsData();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Layout title="Press centre">
      <div
        className="h-[35vh] w-screen bg-hero5 bg-center bg-cover relative flex items-center overflow-hidden"
        id="hero"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="ps-20 text-5xl sm:text-8xl font-extrabold z-10">
          <div className="bg-white/95 backdrop-blur-sm px-8 py-6 pb-7 w-fit rounded-2xl shadow-2xl border border-white/20">
            <span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">
              press centre.
            </span>
          </div>
        </div>
      </div>

      <div className="w-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-white">
        <div className="w-3/4">
          <div id="about" className="py-28 grid sm:grid-cols-2 gap-20">
            <div className="grid md:grid-cols-3 gap-8">
              <div></div>
              <div className="col-span-2 space-y-8">
                <span className="font-bold text-neutral-700 text-4xl text-start leading-tight">
                  transparency and honesty.
                </span>
                <div className="flex justify-start items-start">
                  <p className="text-xl leading-relaxed font-light">
                    We provide up-to-date information on the company and its
                    events to our followers and the media here via our blog. For
                    more information, you can contact us using the details in
                    the page footer.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {allPostsData.map((post) => (
                <button
                  key={`${post.date}-${post.slug}`}
                  className="hover:bg-primary-50/70 w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group relative border border-neutral-100 hover:border-primary-200"
                  onClick={() =>
                    handleNavigate(`/press/${post.date}/${post.slug}`)
                  }
                >
                  <div
                    className="w-full h-full absolute inset-0 group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${post.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center top",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  <div className="relative z-10 px-6 py-6 flex flex-col items-start justify-end h-56 text-white">
                    <span className="font-extrabold text-xl text-start mb-3">
                      {post.title.toLowerCase()}
                    </span>
                    <p className="text-start mb-4 text-white/90 text-sm">
                      on{" "}
                      {new Date(post.date).toLocaleDateString("en-gb", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <Link
                      to={`/press/${post.date}/${post.slug}`}
                      className="font-bold hover:underline text-white decoration-white decoration-2 underline-offset-[5px] transition-colors hover:text-white/90"
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
