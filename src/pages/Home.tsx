import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { getImagePath } from '@/lib/utils';
import { getSortedPostsData } from '@/lib/blogData';
import type { PostData } from '@/types';
import Marquee from "react-fast-marquee";

export default function Home() {
  const navigate = useNavigate();
  const allPostsData: PostData[] = getSortedPostsData();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Layout title="Home">
      <div className="h-[75vh] sm:h-[95vh] w-screen bg-hero bg-cover relative overflow-hidden" id="hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-20 left-20 text-8xl font-extrabold hidden sm:block z-10">
          <div className="bg-white/95 backdrop-blur-sm px-8 py-6 w-fit rounded-2xl shadow-2xl border border-white/20">
            <span className="bg-gradient-to-r from-fuchsia-600 to-sky-400 bg-clip-text text-transparent">
              inspiring the
            </span>
          </div>
          <div className="bg-white/95 backdrop-blur-sm px-8 py-6 pb-7 w-fit rounded-2xl shadow-2xl mt-3 border border-white/20">
            <span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">
              next generation.
            </span>
          </div>
        </div>

        <div className="text-5xl font-extrabold block sm:hidden absolute bottom-20 w-fit z-10">
          <div className="bg-white/95 backdrop-blur-sm px-8 py-6 w-fit rounded-2xl shadow-2xl mx-4 border border-white/20">
            <span className="bg-gradient-to-r from-fuchsia-600 to-sky-400 bg-clip-text text-transparent w-fit">
              inspiring the next generation
            </span>
          </div>
        </div>
      </div>

      <div className="w-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-white">
        <div className="w-3/4 sm:w-2/3">
          <div id="about" className="py-24">
            <span className="font-extrabold text-neutral-700 text-5xl leading-tight">hey. we're verglas.</span>
            <div className="grid sm:grid-cols-2 gap-20 mt-20 text-neutral-700">
              <div className="space-y-8">
                <p className="text-xl leading-relaxed font-light">
                  We're a new startup based in Northern Ireland, developing software solutions to add competitive edge to the classroom and promote technology and programming to the next generation of IT enthusiasts. We want to make it easier for teachers to teach and test their students, while receiving detailed feedback and analytics to evaluate their lessons.
                </p>
                <p className="text-xl leading-relaxed font-light">
                  We were founded by a group of 17-18 year old students from Northern Ireland and England, with the help of the biggest software companies in the country. We're on a mission to inspire students - giving them the same opportunities to get into the industry and make likeminded friends that we were given.
                </p>
                <p className="text-xl leading-relaxed font-light">
                  We're most well known for organizing the annual IglooCode programming competition for 13-15 year olds at Queen's University Belfast, in partnership with Kainos and Liberty IT. Our last event in Belfast welcomed over 100 aspiring programmers from 16 schools across the country.
                </p>
                <Link to="" className="inline-block font-bold hover:underline text-primary-600 decoration-primary-600 decoration-2 underline-offset-[5px] transition-all duration-200 hover:text-primary-700 text-lg">Learn more...</Link>
              </div>
              <div className="flex justify-center items-center relative">
                <div className="bg-red-900 w-full sm:w-80 h-64 sm:absolute right-44 top-60 z-10 sm:shadow-2xl block sm:hidden xl:block rounded-2xl overflow-hidden border border-neutral-200">
                  <img
                    src={getImagePath("images/DSC01903.jpeg")}
                    alt="Verglas team"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-blue-900 w-[24rem] h-[30rem] hidden right-0 top-0 xl:absolute sm:block rounded-2xl overflow-hidden shadow-2xl border border-neutral-200">
                  <img
                    src={getImagePath("images/DSC01890.jpeg")}
                    alt="Verglas event"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-primary-100">
        <div className="w-3/4 sm:w-2/3">
          <div id="impact" className="py-20 flex items-center flex-col">
            <span className="font-extrabold text-5xl mb-6">our impact.</span>
            <div className="grid sm:grid-cols-3 mt-16 gap-16">
              <div className="flex flex-col items-center group">
                <span className="text-7xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-white to-primary-200 bg-clip-text text-transparent">21</span>
                <span className="text-xl font-semibold text-center">secondary schools</span>
              </div>
              <div className="flex flex-col items-center group">
                <span className="text-7xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-white to-primary-200 bg-clip-text text-transparent">320</span>
                <span className="text-xl font-semibold text-center">students reached</span>
              </div>
              <div className="flex flex-col items-center group">
                <span className="text-7xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-white to-primary-200 bg-clip-text text-transparent">59</span>
                <span className="text-xl font-semibold text-center">volunteering roles</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen flex items-center justify-center bg-gradient-to-b from-white to-neutral-50">
        <div className="w-3/4 sm:w-2/3">
          <div id="committees" className="py-28">
            <div className="grid md:grid-cols-2 gap-20 mt-8 text-neutral-700">
              <div className="group">
                <button 
                  className="hover:bg-primary-50/70 w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:border-primary-200" 
                  onClick={() => handleNavigate('/outreach')}
                >
                  <div className="w-full h-72 relative overflow-hidden">
                    <img
                      src={getImagePath("images/IMG_8406.jpg")}
                      alt="Outreach"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="p-10 flex flex-col items-start">
                    <span className="font-extrabold text-neutral-700 text-4xl mb-6">outreach.</span>
                    <p className="text-start mb-8 text-xl leading-relaxed font-light">
                      Here at Verglas, we have a huge committment to outreach. We run multiple programmes across Northern Ireland, with more in the planning phase, which are available to computing students from the UK. We also work directly with local secondary schools to organize invite-only events for their pupils, such as our biggest event, IglooCode, which last year welcomed over 100 aspiring programmers from County Antrim.
                    </p>
                    <Link to="/outreach" className="font-bold hover:underline text-primary-600 decoration-primary-600 decoration-2 underline-offset-[5px] transition-colors hover:text-primary-700 text-lg">Learn more...</Link>
                  </div>
                </button>
              </div>
              <div className="group">
                <button 
                  className="hover:bg-primary-50/70 w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:border-primary-200" 
                  onClick={() => handleNavigate('/products')}
                >
                  <div className="w-full h-72 relative overflow-hidden">
                    <img
                      src={getImagePath("images/DSC01868.jpeg")}
                      alt="Software"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="p-10 flex flex-col items-start">
                    <span className="font-extrabold text-neutral-700 text-4xl mb-6">software.</span>
                    <p className="text-start mb-8 text-xl leading-relaxed font-light">
                      As students ourselves, we understand that learning can be boring. We want to give teachers the opportunity to give their classes an excited buzz, providing them with solutions to engage and consolidate their students' learning, and in return give them detailed analytics to review how much knowledge is actually being retained. We work from local teachers from NI to develop platforms that really work for you.
                    </p>
                    <Link to="/products" className="font-bold hover:underline text-primary-600 decoration-primary-600 decoration-2 underline-offset-[5px] transition-colors hover:text-primary-700 text-lg">Learn more...</Link>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
<div className="w-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-primary-100">
  <div className="w-3/4 sm:w-2/3">

<div id="partners" className="py-20 flex items-center flex-col">
  <span className="font-extrabold text-5xl sm:text-start text-center mb-8">who we've worked with.</span>
  <Marquee pauseOnHover={false} className="mt-8 border-y border-primary-400/30 py-8">
    <div className="flex items-center space-x-16 py-6 mx-8">
      <div className="flex-shrink-0">
        <div className="w-28 h-28 relative">
          <img
            src={getImagePath("images/credit-logo.png")}
            alt="Partner"
            className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
      <div className="flex-shrink-0">
        <div className="w-56 h-28 relative">
          <img
            src={getImagePath("images/LIT-footer-logo.png.avif")}
            alt="Liberty IT"
            className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
      <div className="flex-shrink-0">
        <div className="w-56 h-28 relative">
          <img
            src={getImagePath("images/kainos_transparent-2.webp")}
            alt="Kainos"
            className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
      <div className="flex-shrink-0">
        <div className="w-56 h-28 relative">
          <img
            src={getImagePath("images/Filetoupload,967358,en-2.png")}
            alt="Partner"
            className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
      <div className="flex-shrink-0">
        <div className="w-32 h-28 relative">
          <img
            src={getImagePath("images/logo.png")}
            alt="Partner"
            className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </div>
  </Marquee>
</div>
        </div>
      </div>

      <div className="w-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-white">
        <div className="w-3/4 sm:w-2/3">
          <div id="news" className="py-28">
            <span className="font-extrabold text-neutral-700 text-4xl mb-4">verglas news & press releases.</span>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mt-16 text-neutral-700">
              {allPostsData.map(post => (
                <button 
                  key={`${post.date}-${post.slug}`}
                  className="hover:bg-primary-50/70 w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group relative border border-neutral-100 hover:border-primary-200" 
                  onClick={() => handleNavigate(`/press/${post.date}/${post.slug}`)}
                >
                  <div 
                    className="w-full h-full absolute inset-0 group-hover:scale-110 transition-transform duration-500"
                    style={{ 
                      backgroundImage: `url(${post.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center top',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  <div className="relative z-10 px-6 py-6 flex flex-col items-start justify-end h-56 text-white">
                    <span className="font-extrabold text-xl text-start mb-3">{post.title.toLowerCase()}</span>
                    <p className="text-start mb-4 text-white/90 text-sm">
                      on {new Date(post.date).toLocaleDateString('en-gb', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
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
