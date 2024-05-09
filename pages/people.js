import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";

import { BsGithub, BsGlobeEuropeAfrica, BsLinkedin } from "react-icons/bs";

export default function People() {
	return (
		<Layout title={"People and policies"}>
            <div className="h-[30vh] w-screen bg-hero4 bg-center bg-cover relative flex items-center" id="hero">
                <div className="ps-20 text-5xl sm:text-8xl font-extrabold">
                    <div className="bg-white px-4 py-3 pb-4 w-fit">
                        <span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">
                            key people and policies.
                        </span>
                    </div>
                </div>
            </div>

            <div className="w-screen flex items-center justify-center"><div className="w-3/4 sm:w-1/2">
                    <div id="about" className="py-20 pb-0 grid sm:grid-cols-2 gap-6">
                        <div className="flex justify-start items-start">
                            <span className="font-bold text-neutral-700 text-4xl sm:text-end">striving for creativity and efficiency.</span>
                        </div>
                        <div className="flex justify-center items-center">
                            <p>Our shareholders hand-pick the most innovative and creative minds to sit on the Board and Outreach Committee, to ensure that Verglas brings our customers, partners and attendees the best experience possible.</p>
                        </div>
                    </div>
            </div></div>

            <div className="w-screen flex items-center justify-center"><div className="w-3/4">
                    <div id="about" className="py-20 pb-14 mt-4">
                        <div className="flex justify-start items-start">
                            <span className="font-medium text-neutral-700 text-4xl text-start">board of directors.</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 mt-8">
                            <div className="flex flex-col">
                                    <Image
                                    src={"/images/people/dan.jpg"}
                                    style={{objectFit: "cover", objectPosition: ""}}
                                    className="rounded-full aspect-square"
                                    width={175}
                                    height={175}
                                    />
                                    <span className="mt-6 text-lg font-medium">Daniel Adams</span>
                                    <span className="mt-1">Founder & Executive Director.</span>
                                    <span className="mt-1">Lead Event Coordinator for IglooCode.</span>
                                    <span className="mt-1"><a href="tel:+442896943669,11" className="underline text-primary-500">028 9694 3669 ext. 11</a></span>
                                    <div className="flex flex-row mt-4 gap-2">
                                        <a href="https://linkedin.com/in/dandabs">
                                            <BsLinkedin size={25} className="text-black/70 hover:text-black/50" />
                                        </a>
                                        <a href="https://github.com/dandabs">
                                            <BsGithub size={25} className="text-black/70 hover:text-black/50" />
                                        </a>
                                        <a href="https://dandabs.io">
                                            <BsGlobeEuropeAfrica size={25} className="text-black/70 hover:text-black/50" />
                                        </a>
                                    </div>
                            </div>
                            <div className="flex flex-col">
                                    <Image
                                    src={"/images/people/jake.jpg"}
                                    style={{objectFit: "cover", objectPosition: ""}}
                                    className="rounded-full aspect-square"
                                    width={175}
                                    height={175}
                                    />
                                    <span className="mt-6 text-lg font-medium">Jake Gillman</span>
                                    <span className="mt-1">Founder & Executive Director.</span>
                                    <span className="mt-1"><a href="tel:+442896943669,12" className="underline text-primary-500">028 9694 3669 ext. 12</a></span>
                                    <div className="flex flex-row mt-4 gap-2">
                                        <a href="https://uk.linkedin.com/in/jake-gillman-265608302">
                                            <BsLinkedin size={25} className="text-black/70 hover:text-black/50" />
                                        </a>
                                        <a href="https://github.com/JakeyGilly">
                                            <BsGithub size={25} className="text-black/70 hover:text-black/50" />
                                        </a>
                                        
                                        
                                    </div>
                            </div>
                            <div className="flex flex-col">
                                    <Image
                                    src={"/images/people/bev.png"}
                                    style={{objectFit: "cover", objectPosition: ""}}
                                    className="rounded-full aspect-square"
                                    width={175}
                                    height={175}
                                    />
                                    <span className="mt-6 text-lg font-medium">Bébhinn Bell</span>
                                    <span className="mt-1">Secretary.</span>
                                    <span className="mt-1"><a href="tel:+442896943669,13" className="underline text-primary-500">028 9694 3669 ext. 13</a></span>
                                    <div className="flex flex-row mt-4 gap-2">
                                        {/* <a href="https://github.com/JakeyGilly">
                                            <BsGithub size={25} className="text-black/70 hover:text-black/50" />
                                        </a> */}
                                    </div>
                            </div>
                            <div className="flex flex-col">
                                    <Image
                                    src={"/images/people/ma2.png"}
                                    style={{objectFit: "cover", objectPosition: ""}}
                                    className="rounded-full aspect-square"
                                    width={175}
                                    height={175}
                                    />
                                    <span className="mt-6 text-lg font-medium">Matthew Hoey</span>
                                    <span className="mt-1">Director.</span>
                                    <span className="mt-1"><a href="tel:+442896943669,14" className="underline text-primary-500">028 9694 3669 ext. 14</a></span>
                                    <div className="flex flex-row mt-4 gap-2">
                                        <a href="https://www.linkedin.com/in/ma-t/">
                                            <BsLinkedin size={25} className="text-black/70 hover:text-black/50" />
                                        </a>
                                        <a href="https://github.com/JustMentalMatt">
                                            <BsGithub size={25} className="text-black/70 hover:text-black/50" />
                                        </a>
                                    </div>
                            </div>
                        </div>
                    </div>
            </div></div>

            <div className="w-screen flex items-center justify-center"><div className="w-3/4">
                    <div id="about" className="pb-20 mt-4">
                        <div className="flex justify-start items-start">
                            <span className="font-medium text-neutral-700 text-4xl text-start">board advisors.</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 mt-8">
                            <div className="flex flex-col">
                                    <Image
                                    src={"/images/people/aideen.jpg"}
                                    style={{objectFit: "cover", objectPosition: ""}}
                                    className="rounded-full aspect-square"
                                    width={175}
                                    height={175}
                                    />
                                    <span className="mt-6 text-lg font-medium">Aideen McHugh</span>
                                    <span className="mt-1">IglooCode&trade; co-founder.</span>
                                    <div className="flex flex-row mt-4 gap-2">
                                        <a href="https://www.linkedin.com/in/aideen-m-431007263/">
                                            <BsLinkedin size={25} className="text-black/70 hover:text-black/50" />
                                        </a>
                                    </div>
                            </div>
                            <div className="flex flex-col">
                                    <Image
                                    src={"/images/people/axel.png"}
                                    style={{objectFit: "cover", objectPosition: ""}}
                                    className="rounded-full aspect-square"
                                    width={175}
                                    height={175}
                                    />
                                    <span className="mt-6 text-lg font-medium">Alex Graham</span>
                                    <span className="mt-1"></span>
                                    <div className="flex flex-row mt-4 gap-2">
                                        {/* <a href="https://github.com/JakeyGilly">
                                            <BsGithub size={25} className="text-black/70 hover:text-black/50" />
                                        </a> */}
                                    </div>
                            </div>
                        </div>
                    </div>
            </div></div>

            <div className="w-screen flex items-center justify-center"><div className="w-3/4 sm:w-1/2">
                    <div id="about" className="py-20 grid md:grid-cols-2 gap-12">
                        <div className="flex justify-start items-start flex-col">
                            <span className="font-bold text-neutral-700 text-4xl md:text-end mb-4">company policies & legal documents.</span>
                            <p className="md:text-end">Document filings from incorporation are available on <a href="https://find-and-update.company-information.service.gov.uk/company/14838037/filing-history" className="font-bold hover:underline text-primary-600 decoration-primary-600 decoration-2 underline-offset-[5px]">Companies House</a> (no. 14838037).</p>
                        </div>
                        <div className="flex justify-start items-start">
                            <ul>
                                <li className="mb-5"><span className="font-semibold text-lg">Verglas Software Limited</span><br /><a href="/docs/model_articles_private_ltd_by_shares_after28April2013.pdf" className="text-primary-700 hover:underline text-lg">&bull; Articles of Association</a></li>
                                <li><span className="font-semibold text-lg">Outreach Committee</span><br /><a href="/docs/reference_terms-outreach-v1.0.pdf" className="text-primary-700 hover:underline text-lg">&bull; Terms of Reference</a></li>
                            </ul>
                        </div>
                    </div>
            </div></div>

        </Layout>
    )
}
