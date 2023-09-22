import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";

import { BsGithub, BsGlobeEuropeAfrica, BsLinkedin } from "react-icons/bs";

export default function People() {
	return (
		<Layout title={"People and policies"}>
            <div className="h-[30vh] w-screen bg-hero4 bg-center bg-cover relative" id="hero">
                <div className="absolute bottom-12 left-20 text-7xl font-extrabold">
                    <div className="bg-white px-4 py-3 pb-4 w-fit">
                        <span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">
                            key people and policies.
                        </span>
                    </div>
                </div>
            </div>

            <div className="w-screen flex items-center justify-center"><div className="w-1/2">
                    <div id="about" className="py-20 pb-0 grid grid-cols-2 gap-6">
                        <div className="flex justify-start items-start">
                            <span className="font-bold text-neutral-700 text-4xl text-end">striving for creativity and efficiency.</span>
                        </div>
                        <div className="flex justify-center items-center">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam sed risus tempor aliquet. Morbi non turpis sit amet lorem auctor efficitur. Ut hendrerit mollis nulla, id laoreet enim volutpat feugiat.</p>
                        </div>
                    </div>
            </div></div>

            <div className="w-screen flex items-center justify-center"><div className="w-3/4">
                    <div id="about" className="py-20 pb-14 mt-4">
                        <div className="flex justify-start items-start">
                            <span className="font-medium text-neutral-700 text-4xl text-start">board of directors.</span>
                        </div>
                        <div className="grid grid-cols-4 gap-12 mt-8">
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
                                    <span className="mt-1">Chairs the Outreach Committee.</span>
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
                                    <div className="flex flex-row mt-4 gap-2">
                                        <a href="https://github.com/JakeyGilly">
                                            <BsGithub size={25} className="text-black/70 hover:text-black/50" />
                                        </a>
                                    </div>
                            </div>
                            {/* <div className="flex flex-col">
                                    <Image
                                    src={"/images/people/blank-f.png"}
                                    style={{objectFit: "cover", objectPosition: ""}}
                                    className="rounded-full aspect-square"
                                    width={175}
                                    height={175}
                                    />
                                    <span className="mt-6 text-lg font-medium">John Doe</span>
                                    <span className="mt-1">Chairperson of the Outreach Committee.</span>
                            </div> */}
                        </div>
                    </div>
            </div></div>

            <div className="w-screen flex items-center justify-center"><div className="w-3/4">
                    <div id="about" className="pb-20 mt-4">
                        <div className="flex justify-start items-start">
                            <span className="font-medium text-neutral-700 text-4xl text-start">outreach committee.</span>
                        </div>
                        <div className="grid grid-cols-4 gap-12 mt-8">
                            {/* <div className="flex flex-col">
                                    <Image
                                    src={"/images/people/dan.jpg"}
                                    style={{objectFit: "cover", objectPosition: ""}}
                                    className="rounded-full aspect-square"
                                    width={175}
                                    height={175}
                                    />
                                    <span className="mt-6 text-lg font-medium">Daniel Adams</span>
                            </div> */}
                            <div className="flex flex-col">
                                    <Image
                                    src={"/images/people/aideen.jpg"}
                                    style={{objectFit: "cover", objectPosition: ""}}
                                    className="rounded-full aspect-square"
                                    width={175}
                                    height={175}
                                    />
                                    <span className="mt-6 text-lg font-medium">Aideen McHugh</span>
                                    <div className="flex flex-row mt-4 gap-2">
                                        <a href="https://www.linkedin.com/in/aideen-m-431007263/">
                                            <BsLinkedin size={25} className="text-black/70 hover:text-black/50" />
                                        </a>
                                    </div>
                            </div>
                            <div className="flex flex-col">
                                    <Image
                                    src={"/images/people/blank-f.png"}
                                    style={{objectFit: "cover", objectPosition: ""}}
                                    className="rounded-full aspect-square"
                                    width={175}
                                    height={175}
                                    />
                                    <span className="mt-6 text-lg font-medium">John Doe</span>
                            </div>
                            <div className="flex flex-col">
                                    <Image
                                    src={"/images/people/blank-f.png"}
                                    style={{objectFit: "cover", objectPosition: ""}}
                                    className="rounded-full aspect-square"
                                    width={175}
                                    height={175}
                                    />
                                    <span className="mt-6 text-lg font-medium">John Doe</span>
                            </div>
                            <div className="flex flex-col">
                                    <Image
                                    src={"/images/people/blank-f.png"}
                                    style={{objectFit: "cover", objectPosition: ""}}
                                    className="rounded-full aspect-square"
                                    width={175}
                                    height={175}
                                    />
                                    <span className="mt-6 text-lg font-medium">John Doe</span>
                            </div>
                        </div>
                    </div>
            </div></div>

            <div className="w-screen flex items-center justify-center"><div className="w-1/2">
                    <div id="about" className="py-20 grid grid-cols-2 gap-12">
                        <div className="flex justify-start items-start flex-col">
                            <span className="font-bold text-neutral-700 text-4xl text-end mb-4">company policies & legal documents.</span>
                            <p className="text-end">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam sed risus tempor aliquet. Morbi non turpis sit amet lorem auctor efficitur. Ut hendrerit mollis nulla, id laoreet enim volutpat feugiat.</p>
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
