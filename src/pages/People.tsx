import Layout from "@/components/Layout";
import { getImagePath } from "@/lib/utils";
import { BsGithub, BsGlobeEuropeAfrica, BsLinkedin } from "react-icons/bs";

export default function People() {
  return (
    <Layout title="People and policies">
      <div
        className="h-[30vh] w-screen bg-hero4 bg-center bg-cover relative flex items-center"
        id="hero"
      >
        <div className="ps-20 text-5xl sm:text-8xl font-extrabold">
          <div className="bg-white px-4 py-3 pb-4 w-fit">
            <span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">
              key people and policies.
            </span>
          </div>
        </div>
      </div>

      <div className="w-screen flex items-center justify-center">
        <div className="w-3/4 sm:w-1/2">
          <div id="about" className="py-20 pb-0 grid sm:grid-cols-2 gap-6">
            <div className="flex justify-start items-start">
              <span className="font-bold text-neutral-700 text-4xl sm:text-end">
                striving for creativity and efficiency.
              </span>
            </div>
            <div className="flex justify-center items-center">
              <p>
                Our shareholders hand-pick the most innovative and creative
                minds to sit on the Board, to ensure that
                Verglas brings our customers, partners and attendees the best
                experience possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen flex items-center justify-center">
        <div className="w-3/4">
          <div id="about" className="py-20 pb-14 mt-4">
            <div className="flex justify-start items-start">
              <span className="font-medium text-neutral-700 text-4xl text-start">
                the board of directors.
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 mt-8">
              <div className="flex flex-col">
                <img
                  src={getImagePath("images/people/vgdan.png")}
                  alt="Dan O'Sullivan"
                  className="rounded-full aspect-square w-[175px] h-[175px] object-cover"
                />
                <span className="mt-6 text-lg font-medium">Dan Adams</span>
                <span className="mt-1">
                  Chief Executive Officer. Founder.
                </span>
                <span className="mt-1">
                  <a
                    href="tel:+442896943669,112"
                    className="underline text-primary-500"
                  >
                    028 9694 3669 ext. 101
                  </a>
                </span>
                <div className="flex flex-row mt-4 gap-2">
                  <a href="https://linkedin.com/in/dandabs">
                    <BsLinkedin
                      size={25}
                      className="text-black/70 hover:text-black/50"
                    />
                  </a>
                  <a href="https://github.com/dandabs">
                    <BsGithub
                      size={25}
                      className="text-black/70 hover:text-black/50"
                    />
                  </a>
                  <a href="https://dandabs.io">
                    <BsGlobeEuropeAfrica
                      size={25}
                      className="text-black/70 hover:text-black/50"
                    />
                  </a>
                </div>
              </div>

              <div className="flex flex-col">
                <img
                  src={getImagePath("images/people/dylan.jpeg")}
                  alt="Dylan McKenzie"
                  className="rounded-full aspect-square w-[175px] h-[175px] object-cover"
                />
                <span className="mt-6 text-lg font-medium">Dylan McKenzie</span>
                <span className="mt-1">Chief Operating Officer.</span>
                <span className="mt-1">
                  <a
                    href="tel:+442896943669,114"
                    className="underline text-primary-500"
                  >
                    028 9694 3669 ext. 102
                  </a>
                </span>
                <div className="flex flex-row mt-4 gap-2">
                  <a href="https://www.linkedin.com/in/dylanmck/">
                    <BsLinkedin
                      size={25}
                      className="text-black/70 hover:text-black/50"
                    />
                  </a>
                  <a href="https://github.com/dylanmckenzie">
                    <BsGithub
                      size={25}
                      className="text-black/70 hover:text-black/50"
                    />
                  </a>
                  <a href="https://dmck.dev/">
                    <BsGlobeEuropeAfrica
                      size={25}
                      className="text-black/70 hover:text-black/50"
                    />
                  </a>
                </div>
              </div>

              <div className="flex flex-col">
                <img
                  src={getImagePath("images/people/axel2.png")}
                  alt="Axel Graham"
                  className="rounded-full aspect-square w-[175px] h-[175px] object-cover"
                />
                <span className="mt-6 text-lg font-medium">Axel Graham</span>
                <span className="mt-1">Chief Marketing Officer.</span>
                <span className="mt-1">
                  <a
                    href="tel:+442896943669,114"
                    className="underline text-primary-500"
                  >
                    028 9694 3669 ext. 103
                  </a>
                </span>
                <div className="flex flex-row mt-4 gap-2">
                  <a href="https://www.linkedin.com/in/alex-graham-a37239335/">
                    <BsLinkedin
                      size={25}
                      className="text-black/70 hover:text-black/50"
                    />
                  </a>
                </div>
              </div>

              <div className="flex flex-col">
                <img
                  src={getImagePath("images/people/vgbev.png")}
                  alt="Bébhinn Bell"
                  className="rounded-full aspect-square w-[175px] h-[175px] object-cover"
                />
                <span className="mt-6 text-lg font-medium">Bébhinn Bell</span>
                <span className="mt-1">Secretary.</span>
                <span className="mt-1">
                  <a
                    href="tel:+442896943669,114"
                    className="underline text-primary-500"
                  >
                    028 9694 3669 ext. 104
                  </a>
                </span>
                <div className="flex flex-row mt-4 gap-2">
                  <a href="https://www.linkedin.com/in/bebhinn-bell-84a28a2b7/">
                    <BsLinkedin
                      size={25}
                      className="text-black/70 hover:text-black/50"
                    />
                  </a>
                </div>
              </div>

              <div className="flex flex-col">
                <img
                  src={getImagePath("images/people/jak2.png")}
                  alt="Jake Gillman"
                  className="rounded-full aspect-square w-[175px] h-[175px] object-cover"
                />
                <span className="mt-6 text-lg font-medium">Jake Gillman</span>
                <span className="mt-1">Director.</span>
                <div className="flex flex-row mt-4 gap-2">
                  <a href="https://uk.linkedin.com/in/jake-gillman-265608302">
                    <BsLinkedin
                      size={25}
                      className="text-black/70 hover:text-black/50"
                    />
                  </a>
                  <a href="https://github.com/JakeyGilly">
                    <BsGithub
                      size={25}
                      className="text-black/70 hover:text-black/50"
                    />
                  </a>
                </div>
              </div>

              <div className="flex flex-col">
                <img
                  src={getImagePath("images/people/vgma.png")}
                  alt="Matthew McKay"
                  className="rounded-full aspect-square w-[175px] h-[175px] object-cover"
                />
                <span className="mt-6 text-lg font-medium">Matthew Hoey</span>
                <span className="mt-1">Director.</span>
                <div className="flex flex-row mt-4 gap-2">
                  <a href="https://www.linkedin.com/in/ma-t/">
                    <BsLinkedin
                      size={25}
                      className="text-black/70 hover:text-black/50"
                    />
                  </a>
                  <a href="https://github.com/JustMentalMatt">
                    <BsGithub
                      size={25}
                      className="text-black/70 hover:text-black/50"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen flex items-center justify-center">
        <div className="w-3/4 sm:w-1/2">
          <div id="about" className="py-20 grid md:grid-cols-2 gap-12">
            <div className="flex justify-start items-start flex-col">
              <span className="font-bold text-neutral-700 text-4xl md:text-end mb-4">
                company policies & legal documents.
              </span>
            </div>
            <div className="flex justify-start items-start mt-3">
              <div>
                <p>
                  We provide up-to-date information on our company policies and
                  legal documents to our customers and partners. All documents
                  are available to view below.
                </p>
                <div className="mt-6 space-y-3">
                  <div>
                    <a
                      href="/docs/articles_verglas_ni_incorp.pdf"
                      className="font-bold hover:underline text-primary-600 decoration-primary-600 decoration-2 underline-offset-[5px]"
                    >
                      Articles of Association
                    </a>
                  </div>
                  <div>
                    <a
                      href="/docs/reference_terms-outreach-v1.0.pdf"
                      className="font-bold hover:underline text-primary-600 decoration-primary-600 decoration-2 underline-offset-[5px]"
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
