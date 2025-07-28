import Layout from '@/components/Layout';
import { getImagePath } from '@/lib/utils';

export default function Outreach() {
  return (
    <Layout title="Outreach">
      <div className="h-[45vh] w-screen bg-hero2 bg-center bg-cover relative overflow-hidden" id="hero">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-20 sm:left-20 text-6xl sm:text-8xl font-extrabold z-10">
          <div className="bg-white/95 backdrop-blur-sm px-8 py-6 pb-7 w-fit rounded-2xl shadow-2xl border border-white/20">
            <span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">
              outreach at verglas.
            </span>
          </div>
        </div>
      </div>

      <div className="w-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-white">
        <div className="w-3/4 sm:w-1/2">
          <div id="about" className="py-28 grid sm:grid-cols-2 gap-16">
            <div className="flex justify-start items-start">
              <span className="font-bold text-neutral-700 text-4xl leading-tight">captivating the next generation of tech.</span>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-xl leading-relaxed font-light">Our outreach programmes are designed to inspire and educate young people about technology and programming. Through hands-on workshops, competitions, and partnerships with schools, we aim to build the next generation of tech talent in Northern Ireland and beyond.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen flex items-center justify-center bg-white">
        <div className="w-3/4 sm:w-1/2">
          <div className="py-28">
            <h2 className="font-bold text-neutral-700 text-4xl mb-16">IglooCode Competition</h2>
            <div className="grid sm:grid-cols-2 gap-20">
              <div className="group">
                <div className="overflow-hidden rounded-2xl shadow-lg border border-neutral-200">
                  <img
                    src={getImagePath("images/DSC01819.jpeg")}
                    alt="IglooCode Competition"
                    className="w-full h-72 object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-8">
                <p className="text-xl leading-relaxed font-light">
                  IglooCode is our flagship programming competition for secondary school students aged 13-15. The competition combines creative problem-solving with technical challenges, encouraging students to work in teams while developing their coding skills.
                </p>
                <p className="text-xl leading-relaxed font-light">
                  Our most recent event at Queen's University Belfast welcomed over 100 students from 16 schools across Northern Ireland, with partnerships from major tech companies including Kainos and Liberty IT.
                </p>
                <a href="https://iglooco.de" className="inline-block font-bold hover:underline text-primary-600 decoration-primary-600 decoration-2 underline-offset-[5px] transition-colors hover:text-primary-700 text-lg">
                  Learn more about IglooCode
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-primary-100">
        <div className="w-3/4 sm:w-1/2">
          <div className="py-28">
            <h2 className="font-bold text-5xl mb-16 text-center">Get Involved</h2>
            <div className="grid sm:grid-cols-2 gap-20">
              <div className="text-center space-y-8">
                <h3 className="font-bold text-2xl mb-6">For Schools</h3>
                <p className="leading-relaxed text-lg font-light">
                  We work directly with secondary schools to organize computing workshops and competitions. Contact us to bring our outreach programmes to your school.
                </p>
                <a href="mailto:outreach@verglas.io" className="inline-block font-bold hover:underline text-primary-100 decoration-primary-100 decoration-2 underline-offset-[5px] transition-colors hover:text-white text-lg">
                  Contact Our Outreach Team
                </a>
              </div>
              <div className="text-center space-y-8">
                <h3 className="font-bold text-2xl mb-6">For Students</h3>
                <p className="leading-relaxed text-lg font-light">
                  Interested in participating in our competitions or joining our community? Follow us on social media and sign up for updates about upcoming events.
                </p>
                <a href="https://iglooco.de/getinvolved" className="inline-block font-bold hover:underline text-primary-100 decoration-primary-100 decoration-2 underline-offset-[5px] transition-colors hover:text-white text-lg">
                  Join Our Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
