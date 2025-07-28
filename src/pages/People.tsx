import Layout from "@/components/Layout";
import { getImagePath } from "@/lib/utils";
import { BsGithub, BsGlobeEuropeAfrica, BsLinkedin } from "react-icons/bs";

export default function People() {
  return (
    <Layout title="People and policies">
      <div
        className="h-[35vh] w-screen bg-hero4 bg-center bg-cover relative flex items-center overflow-hidden"
        id="hero"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="ps-20 text-5xl sm:text-8xl font-extrabold z-10">
          <div className="bg-white/95 backdrop-blur-sm px-8 py-6 pb-7 w-fit rounded-2xl shadow-2xl border border-white/20">
            <span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">
              key people and policies.
            </span>
          </div>
        </div>
      </div>

      <div className="w-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-white">
        <div className="w-3/4 sm:w-1/2">
          <div id="about" className="py-28 pb-0 grid sm:grid-cols-2 gap-12">
            <div className="flex justify-start items-start">
              <span className="font-bold text-neutral-700 text-4xl sm:text-end leading-tight">
                striving for creativity and efficiency.
              </span>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-xl leading-relaxed font-light">
                Our shareholders hand-pick the most innovative and creative
                minds to sit on the Board, to ensure that
                Verglas brings our customers, partners and attendees the best
                experience possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen flex items-center justify-center bg-white">
        <div className="w-3/4">
          <div id="about" className="py-28 pb-20 mt-4">
            <div className="flex justify-center items-center">
              <span className="font-medium text-neutral-700 text-4xl text-center mb-12">
                the board of directors.
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16 mt-12 justify-center">
              <div className="flex flex-col group text-left">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={getImagePath("images/people/vgdan.png")}
                    alt="Dan O'Sullivan"
                    className="rounded-xl aspect-square w-[175px] h-[175px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="mt-8 text-xl font-medium">Dan Adams</span>
                <span className="mt-2 text-neutral-600 font-light">
                  Chief Executive Officer. Founder.
                </span>
                <span className="mt-2">
                  <a
                    href="tel:+442896943669,101"
                    className="underline text-primary-500 hover:text-primary-600 transition-colors font-light"
                  >
                    028 9694 3669 ext. 101
                  </a>
                </span>
                <div className="flex flex-row mt-6 gap-4">
                  <a href="https://linkedin.com/in/dandabs" className="hover:scale-110 transition-transform">
                    <BsLinkedin
                      size={28}
                      className="text-black/70 hover:text-primary-600 transition-colors"
                    />
                  </a>
                  <a href="https://github.com/dandabs" className="hover:scale-110 transition-transform">
                    <BsGithub
                      size={28}
                      className="text-black/70 hover:text-primary-600 transition-colors"
                    />
                  </a>
                  <a href="https://dandabs.io" className="hover:scale-110 transition-transform">
                    <BsGlobeEuropeAfrica
                      size={28}
                      className="text-black/70 hover:text-primary-600 transition-colors"
                    />
                  </a>
                </div>
              </div>

              <div className="flex flex-col group text-left">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={getImagePath("images/people/dylan.jpeg")}
                    alt="Dylan McKenzie"
                    className="rounded-xl aspect-square w-[175px] h-[175px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="mt-8 text-xl font-medium">Dylan McKenzie</span>
                <span className="mt-2 text-neutral-600 font-light">Chief Operating Officer.</span>
                <span className="mt-2">
                  <a
                    href="tel:+442896943669,102"
                    className="underline text-primary-500 hover:text-primary-600 transition-colors font-light"
                  >
                    028 9694 3669 ext. 102
                  </a>
                </span>
                <div className="flex flex-row mt-6 gap-4">
                  <a href="https://www.linkedin.com/in/dylanmck/" className="hover:scale-110 transition-transform">
                    <BsLinkedin
                      size={28}
                      className="text-black/70 hover:text-primary-600 transition-colors"
                    />
                  </a>
                  <a href="https://github.com/dylanmckenzie" className="hover:scale-110 transition-transform">
                    <BsGithub
                      size={28}
                      className="text-black/70 hover:text-primary-600 transition-colors"
                    />
                  </a>
                  <a href="https://dmck.dev/" className="hover:scale-110 transition-transform">
                    <BsGlobeEuropeAfrica
                      size={28}
                      className="text-black/70 hover:text-primary-600 transition-colors"
                    />
                  </a>
                </div>
              </div>

              <div className="flex flex-col group text-left">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={getImagePath("images/people/axel2.png")}
                    alt="Axel Graham"
                    className="rounded-xl aspect-square w-[175px] h-[175px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="mt-8 text-xl font-medium">Axel Graham</span>
                <span className="mt-2 text-neutral-600 font-light">Chief Marketing Officer.</span>
                <span className="mt-2">
                  <a
                    href="tel:+442896943669,103"
                    className="underline text-primary-500 hover:text-primary-600 transition-colors font-light"
                  >
                    028 9694 3669 ext. 103
                  </a>
                </span>
                <div className="flex flex-row mt-6 gap-4">
                  <a href="https://www.linkedin.com/in/alex-graham-a37239335/" className="hover:scale-110 transition-transform">
                    <BsLinkedin
                      size={28}
                      className="text-black/70 hover:text-primary-600 transition-colors"
                    />
                  </a>
                </div>
              </div>

              <div className="flex flex-col group text-left">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={getImagePath("images/people/vgbev.png")}
                    alt="Bébhinn Bell"
                    className="rounded-xl aspect-square w-[175px] h-[175px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="mt-8 text-xl font-medium">Bébhinn Bell</span>
                <span className="mt-2 text-neutral-600 font-light">Secretary.</span>
                <span className="mt-2">
                  <a
                    href="tel:+442896943669,104"
                    className="underline text-primary-500 hover:text-primary-600 transition-colors font-light"
                  >
                    028 9694 3669 ext. 104
                  </a>
                </span>
                <div className="flex flex-row mt-6 gap-4">
                  <a href="https://www.linkedin.com/in/bebhinn-bell-84a28a2b7/" className="hover:scale-110 transition-transform">
                    <BsLinkedin
                      size={28}
                      className="text-black/70 hover:text-primary-600 transition-colors"
                    />
                  </a>
                </div>
              </div>

              <div className="flex flex-col group text-left">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={getImagePath("images/people/jak2.png")}
                    alt="Jake Gillman"
                    className="rounded-xl aspect-square w-[175px] h-[175px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="mt-8 text-xl font-medium">Jake Gillman</span>
                <span className="mt-2 text-neutral-600 font-light">Director.</span>
                <div className="flex flex-row mt-6 gap-4">
                  <a href="https://uk.linkedin.com/in/jake-gillman-265608302" className="hover:scale-110 transition-transform">
                    <BsLinkedin
                      size={28}
                      className="text-black/70 hover:text-primary-600 transition-colors"
                    />
                  </a>
                  <a href="https://github.com/JakeyGilly" className="hover:scale-110 transition-transform">
                    <BsGithub
                      size={28}
                      className="text-black/70 hover:text-primary-600 transition-colors"
                    />
                  </a>
                </div>
              </div>

              <div className="flex flex-col group text-left">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={getImagePath("images/people/vgma.png")}
                    alt="Matthew McKay"
                    className="rounded-xl aspect-square w-[175px] h-[175px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="mt-8 text-xl font-medium">Matthew Hoey</span>
                <span className="mt-2 text-neutral-600 font-light">Director.</span>
                <div className="flex flex-row mt-6 gap-4">
                  <a href="https://www.linkedin.com/in/ma-t/" className="hover:scale-110 transition-transform">
                    <BsLinkedin
                      size={28}
                      className="text-black/70 hover:text-primary-600 transition-colors"
                    />
                  </a>
                  <a href="https://github.com/JustMentalMatt" className="hover:scale-110 transition-transform">
                    <BsGithub
                      size={28}
                      className="text-black/70 hover:text-primary-600 transition-colors"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-white">
        <div className="w-3/4 sm:w-1/2">
          <div id="about" className="py-28 grid md:grid-cols-2 gap-16">
            <div className="flex justify-center items-start flex-col">
              <span className="font-bold text-neutral-700 text-4xl text-center mb-6">
                company policies & legal documents.
              </span>
            </div>
            <div className="flex justify-center items-start mt-8">
              <div className="text-center">
                <p className="text-xl leading-relaxed font-light">
                  We provide up-to-date information on our company policies and
                  legal documents to our customers and partners. All documents
                  are available to view below.
                </p>
                <div className="mt-10 space-y-6">
                  <div>
                    <a
                      href="/docs/articles_verglas_ni_incorp.pdf"
                      className="font-bold hover:underline text-primary-600 decoration-primary-600 decoration-2 underline-offset-[5px] transition-colors hover:text-primary-700 text-lg"
                    >
                      Articles of Association
                    </a>
                  </div>
                  <div>
                    <a
                      href="/docs/reference_terms-outreach-v1.0.pdf"
                      className="font-bold hover:underline text-primary-600 decoration-primary-600 decoration-2 underline-offset-[5px] transition-colors hover:text-primary-700 text-lg"
                    >
                      Outreach Terms & Conditions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
