import Layout from '@/components/Layout';
import { getImagePath } from '@/lib/utils';

export default function Outreach() {
  return (
    <Layout title="Outreach">
      <div className="h-[40vh] w-screen bg-hero2 bg-center bg-cover relative" id="hero">
        <div className="absolute bottom-16 sm:left-20 text-6xl sm:text-8xl font-extrabold">
          <div className="bg-white px-4 py-3 pb-4 w-fit">
            <span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">
              outreach at verglas.
            </span>
          </div>
        </div>
      </div>

      <div className="w-screen flex items-center justify-center">
        <div className="w-3/4 sm:w-1/2">
          <div id="about" className="py-20 grid sm:grid-cols-2 gap-6">
            <div className="flex justify-start items-start">
              <span className="font-bold text-neutral-700 text-4xl">captivating the next generation of tech.</span>
            </div>
            <div className="flex justify-center items-center">
              <p>Our outreach programmes are designed to inspire and educate young people about technology and programming. Through hands-on workshops, competitions, and partnerships with schools, we aim to build the next generation of tech talent in Northern Ireland and beyond.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen flex items-center justify-center">
        <div className="w-3/4 sm:w-1/2">
          <div className="py-20">
            <h2 className="font-bold text-neutral-700 text-3xl mb-8">IglooCode Competition</h2>
            <div className="grid sm:grid-cols-2 gap-12">
              <div>
                <img
                  src={getImagePath("images/DSC01819.jpeg")}
                  alt="IglooCode Competition"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div>
                <p className="mb-4">
                  IglooCode is our flagship programming competition for secondary school students aged 13-15. The competition combines creative problem-solving with technical challenges, encouraging students to work in teams while developing their coding skills.
                </p>
                <p className="mb-4">
                  Our most recent event at Queen's University Belfast welcomed over 100 students from 16 schools across Northern Ireland, with partnerships from major tech companies including Kainos and Liberty IT.
                </p>
                <a href="https://iglooco.de" className="font-bold hover:underline text-primary-600 decoration-primary-600 decoration-2 underline-offset-[5px]">
                  Learn more about IglooCode
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen flex items-center justify-center bg-primary-600 text-primary-100">
        <div className="w-3/4 sm:w-1/2">
          <div className="py-20">
            <h2 className="font-bold text-4xl mb-8 text-center">Get Involved</h2>
            <div className="grid sm:grid-cols-2 gap-12">
              <div className="text-center">
                <h3 className="font-bold text-xl mb-4">For Schools</h3>
                <p className="mb-4">
                  We work directly with secondary schools to organize computing workshops and competitions. Contact us to bring our outreach programmes to your school.
                </p>
                <a href="mailto:outreach@verglas.io" className="font-bold hover:underline text-primary-100 decoration-primary-100 decoration-2 underline-offset-[5px]">
                  Contact Our Outreach Team
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl mb-4">For Students</h3>
                <p className="mb-4">
                  Interested in participating in our competitions or joining our community? Follow us on social media and sign up for updates about upcoming events.
                </p>
                <a href="https://iglooco.de/getinvolved" className="font-bold hover:underline text-primary-100 decoration-primary-100 decoration-2 underline-offset-[5px]">
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
