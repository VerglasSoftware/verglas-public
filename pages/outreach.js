import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";

export default function Outreach() {
	return (
		<Layout title={"Home"}>
            <div className="h-[40vh] w-screen bg-hero2 bg-center bg-cover relative" id="hero">
                <div className="absolute bottom-16 left-20 text-8xl font-extrabold">
                    <div className="bg-white px-4 py-3 pb-4 w-fit">
                        <span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">
                            outreach at verglas.
                        </span>
                    </div>
                </div>
            </div>

            <div className="w-screen flex items-center justify-center"><div className="w-1/2">
                    <div id="about" className="py-20 grid grid-cols-2 gap-6">
                        <div className="flex justify-start items-start">
                            <span className="font-bold text-neutral-700 text-4xl">captivating the next generation of tech.</span>
                        </div>
                        <div className="flex justify-center items-center">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam sed risus tempor aliquet. Morbi non turpis sit amet lorem auctor efficitur. Ut hendrerit mollis nulla, id laoreet enim volutpat feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut id purus ac lorem tincidunt ornare. Vestibulum molestie dui et libero aliquet, ac interdum magna tincidunt.</p>
                        </div>
                    </div>
                    <div id="about" className="pb-20">
                        <span className="font-normal text-primary-800 text-2xl">"A very well organised event and such a credit to the pupils that organised. A great system to add some competitive edge during the competition sessions. Well done to all."</span>
                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam sed risus tempor aliquet. Morbi non turpis sit amet lorem auctor efficitur. Ut hendrerit mollis nulla, id laoreet enim volutpat feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut id purus ac lorem tincidunt ornare.</p>
                    </div>
            </div></div>

            <div className="w-screen flex items-center justify-center bg-primary-600 text-primary-100"><div className="w-2/3">
                    <div id="impact" className="py-14 flex items-center flex-col">
                        <span className="font-extrabold text-4xl">verglas events.</span>
                        <div className="flex flex-row mt-8 gap-12">
                            <div className="flex flex-col items-center">
                                <span className="text-6xl font-bold">16</span>
                                <span className="text-xl font-semibold">secondary schools</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-6xl font-bold">100</span>
                                <span className="text-xl font-semibold">students reached</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-6xl font-bold">27</span>
                                <span className="text-xl font-semibold">volunteering roles</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-6xl font-bold">3</span>
                                <span className="text-xl font-semibold">partner companies</span>
                            </div>
                        </div>
                    </div>
            </div></div>

            <div className="w-screen flex items-center justify-center"><div className="w-1/2">
                    <div id="about" className="py-16 grid grid-cols-2 gap-12">
                        <div>
                            <div className="flex justify-center items-center relative">
                                <div className="bg-red-900 w-full h-[25rem]">
                                    <Image
                                    src={"/images/DSC01866.jpeg"}
                                    fill={true}
                                    style={{objectFit: "cover", objectPosition: ""}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="font-bold text-neutral-700 text-3xl">igloocode.</span>
                            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam sed risus tempor aliquet. Morbi non turpis sit amet lorem auctor efficitur. Ut hendrerit mollis nulla, id laoreet enim volutpat feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut id purus ac lorem tincidunt ornare.</p>
                            <p className="mt-4 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam sed risus tempor aliquet. Morbi non turpis sit amet lorem auctor efficitur. Ut hendrerit mollis nulla, id laoreet enim volutpat feugiat.</p>
                            <Link href="" className="font-bold hover:underline text-primary-600 decoration-primary-600 decoration-2 underline-offset-[5px]">Learn more...</Link>
                        </div>

                    </div>

                    <div id="about" className="pb-20">
                        <span className="font-normal text-primary-800 text-2xl">"The tasks were brilliant and incredibly well thought out, the software you created was astounding. The prizes were great and we really enjoyed the industry talks as well."</span>
                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam sed risus tempor aliquet. Morbi non turpis sit amet lorem auctor efficitur. Ut hendrerit mollis nulla, id laoreet enim volutpat feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut id purus ac lorem tincidunt ornare.</p>
                    </div>

                    <div className="grid grid-cols-4 gap-6 mb-16 w-full">
                        <div className="flex flex-col items-center relative w-full h-36">
                            <Image
                            src={"/images/DSC01854.jpeg"}
                            fill={true}
                            style={{objectFit: "cover", objectPosition: ""}}
                            />
                        </div>
                        <div className="flex flex-col items-center relative w-full h-36">
                            <Image
                            src={"/images/DSC01855.jpeg"}
                            fill={true}
                            style={{objectFit: "cover", objectPosition: ""}}
                            />
                        </div>
                        <div className="flex flex-col items-center relative w-full h-36">
                            <Image
                            src={"/images/DSC01868.jpeg"}
                            fill={true}
                            style={{objectFit: "cover", objectPosition: ""}}
                            />
                        </div>
                        <div className="flex flex-col items-center relative w-full h-36">
                            <Image
                            src={"/images/F96E1662-E045-49E0-A8F0-9A60BDC16D0E.jpeg"}
                            fill={true}
                            style={{objectFit: "cover", objectPosition: ""}}
                            />
                        </div>
                    </div>

            </div></div>

            <div className="w-screen flex items-center justify-center bg-primary-600 text-primary-100"><div className="w-2/3">
                    <div id="partners" className="py-14 flex items-center flex-col">
                        <span className="font-extrabold text-4xl">our outreach partners.</span>
                        <div className="flex flex-row mt-8 gap-12">
                            <div className="flex flex-col items-center">
                                <div className="w-48 h-24 relative">
                                    <Image
                                    src={"/images/kainos_transparent-2.webp"}
                                    fill={true}
                                    style={{objectFit: "contain", objectPosition: ""}}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-48 h-24 relative">
                                    <Image
                                    src={"/images/LIT-footer-logo.png.avif"}
                                    fill={true}
                                    style={{objectFit: "contain", objectPosition: ""}}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-48 h-24 relative">
                                    <Image
                                    src={"/images/Filetoupload,967358,en-2.png"}
                                    fill={true}
                                    style={{objectFit: "contain", objectPosition: ""}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
            </div></div>

            <div className="w-screen flex items-center justify-center"><div className="w-1/2">

                    <div id="about" className="pb-20 pt-16">
                        <span className="font-normal text-primary-800 text-2xl">"We are delighted that our STEM committee at Liberty IT were able to support this fantastic coding event for schools organised by three A Level students; Daniel, Aideen and Emma 👏🏻"</span>
                        <div className="flex flex-col text-primary-900 mt-2">
                            <span className="font-bold">Janey Spence</span>
                            <span>Senior Data Scientist</span>
                            <span>Liberty IT</span>
                        </div>
                        <p className="mt-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam sed risus tempor aliquet. Morbi non turpis sit amet lorem auctor efficitur. Ut hendrerit mollis nulla, id laoreet enim volutpat feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut id purus ac lorem tincidunt ornare.</p>
                    </div>

            </div></div>

        </Layout>
    )
}
