import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { getImagePath } from '@/lib/utils';

export default function Products() {
  return (
    <Layout title="Software">
      <div className="h-[40vh] w-screen bg-hero3 bg-center bg-cover relative overflow-hidden" id="hero">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-16 sm:left-20 text-6xl sm:text-8xl font-extrabold z-10">
          <div className="bg-white/95 backdrop-blur-sm px-6 py-4 pb-5 w-fit rounded-lg shadow-lg">
            <span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">
              software at verglas.
            </span>
          </div>
        </div>
      </div>

      <div className="w-screen flex items-center justify-center">
        <div className="w-3/4 sm:w-1/2">
          <div id="about" className="py-20 pb-0 grid sm:grid-cols-2 gap-8">
            <div className="flex justify-center items-center">
              <p className="text-lg leading-relaxed">Teaching isn't easy. Learning isn't easy. That's why we want to give both students and teachers exciting, new, easy-to-use platforms to learn and teach on, that easily integrate with the software and systems they're already used to using.</p>
            </div>
            <div className="flex justify-start items-start">
              <span className="font-bold text-neutral-700 text-4xl text-end mb-4 sm:mb-0 leading-tight">engaging solutions to consolidate your teaching.</span>
            </div>
          </div>
          <div id="about" className="pb-20">
            <p className="mt-6 text-lg leading-relaxed">Teachers have no time to learn how to use new software – we offer solutions that can instantly be used, with no need to waste time sitting for hours to make different question packs, set up user accounts for their students, or perform other time-wasting tasks.</p>
            <p className="mt-6 text-lg leading-relaxed">As students, we know that sometimes learning can be incredibly boring. We're addressing this by creating experiences that make class tests and activites exciting and engaging – making your students actually try their best to learn something new.</p>
          </div>
        </div>
      </div>

      <div className="w-screen flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-700 text-primary-100">
        <div className="w-2/3">
          <div id="impact" className="py-16 flex items-center flex-col">
            <span className="font-extrabold text-4xl mb-4">verglas software.</span>
            <div className="grid sm:grid-cols-3 mt-12 gap-12">
              <div className="flex flex-col items-center group">
                <span className="text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">2</span>
                <span className="text-xl font-semibold text-center">developers</span>
              </div>
              <div className="flex flex-col items-center group">
                <span className="text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">£2,470</span>
                <span className="text-xl font-semibold text-center">invested by partners</span>
              </div>
              <div className="flex flex-col items-center group">
                <span className="text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">662</span>
                <span className="text-xl font-semibold text-center">Git commits</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen flex items-center justify-center">
        <div className="w-3/4 sm:w-1/2">
          <div id="about" className="py-20 grid sm:grid-cols-2 gap-16">
            <div>
              <div className="flex justify-center items-center relative group">
                <div className="w-full h-[15rem] overflow-hidden rounded-xl">
                  <img
                    src={getImagePath("images/Näyttökuva 2023-9-21 kello 16.27.14.png")}
                    alt="Educatr Platform"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <span className="font-bold text-neutral-700 text-3xl">Educatr<span className="font-light">&trade;</span>.</span>
              <p className="text-lg leading-relaxed">Educatr&trade; is our tried-and-tested educational competition platform, targeted towards computing classes. With various experiences to test your students with, including capture-the-flag competitions, one-at-a-time quizzes, minigames, and paper tests, you'll never be out of ideas to engage your students.</p>
              <Link to="https://educatr.app" className="inline-block font-bold hover:underline text-primary-600 decoration-primary-600 decoration-2 underline-offset-[5px] transition-colors hover:text-primary-700">Learn more...</Link>
            </div>
          </div>

          <div id="about" className="pb-24 space-y-6">
            <span className="font-normal text-primary-800 text-2xl leading-relaxed">"A great system to add some competitive edge during competition sessions."</span>
            <p className="text-lg leading-relaxed">Educatr&trade; is currently in the alpha testing stage, and was used as the primary platform for the IglooCode&trade; 2023 programming competition event at Queen's University Belfast. We received much positive feedback from local teachers, which inspired us to open this platform to schools across the UK.</p>
            <p className="text-lg leading-relaxed">Our private beta test is scheduled to begin in November 2023. To register for the beta, please fill in the form available at <a href="https://educatr.app/beta" className="font-bold hover:underline text-primary-600 decoration-primary-600 decoration-2 underline-offset-[5px] transition-colors hover:text-primary-700">educatr.app/beta</a>.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
