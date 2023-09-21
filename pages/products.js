import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";

export default function Products() {
	return (
		<Layout title={"Software"}>
            <div className="h-[40vh] w-screen bg-hero3 bg-center bg-cover relative" id="hero">
                <div className="absolute bottom-16 left-20 text-8xl font-extrabold">
                    <div className="bg-white px-4 py-3 pb-4 w-fit">
                        <span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">
                            software at verglas.
                        </span>
                    </div>
                </div>
            </div>

            <div className="w-screen flex items-center justify-center"><div className="w-1/2">
                    <div id="about" className="py-20 pb-0 grid grid-cols-2 gap-6">
                        <div className="flex justify-center items-center">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam sed risus tempor aliquet. Morbi non turpis sit amet lorem auctor efficitur. Ut hendrerit mollis nulla, id laoreet enim volutpat feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut id purus ac lorem tincidunt ornare.</p>
                        </div>
                        <div className="flex justify-start items-start">
                            <span className="font-bold text-neutral-700 text-4xl text-end">engaging solutions to consolidate your teaching.</span>
                        </div>
                    </div>
                    <div id="about" className="pb-20">
                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam sed risus tempor aliquet. Morbi non turpis sit amet lorem auctor efficitur. Ut hendrerit mollis nulla, id laoreet enim volutpat feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut id purus ac lorem tincidunt ornare.</p>
                    </div>
            </div></div>

            <div className="w-screen flex items-center justify-center bg-primary-600 text-primary-100"><div className="w-2/3">
                    <div id="impact" className="py-14 flex items-center flex-col">
                        <span className="font-extrabold text-4xl">verglas software.</span>
                        <div className="flex flex-row mt-8 gap-12">
                            <div className="flex flex-col items-center">
                                <span className="text-6xl font-bold">2</span>
                                <span className="text-xl font-semibold">developers</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-6xl font-bold">£1,370</span>
                                <span className="text-xl font-semibold">invested by partners</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-6xl font-bold">662</span>
                                <span className="text-xl font-semibold">Git commits</span>
                            </div>
                        </div>
                    </div>
            </div></div>

            <div className="w-screen flex items-center justify-center"><div className="w-1/2">
                    <div id="about" className="py-16 grid grid-cols-2 gap-12">
                        <div>
                            <div className="flex justify-center items-center relative">
                                <div className="w-full h-[15rem]">
                                    <Image
                                    src={"/images/Näyttökuva 2023-9-21 kello 16.27.14.png"}
                                    fill={true}
                                    style={{objectFit: "contain", objectPosition: ""}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="font-bold text-neutral-700 text-3xl">Educatr<span className="font-light">&trade;</span>.</span>
                            <p className="mt-4 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam sed risus tempor aliquet. Morbi non turpis sit amet lorem auctor efficitur. Ut hendrerit mollis nulla, id laoreet enim volutpat feugiat. Interdum et malesuada fames ac ante ipsum primis in.</p>
                            <Link href="" className="font-bold hover:underline text-primary-600 decoration-primary-600 decoration-2 underline-offset-[5px]">Learn more...</Link>
                        </div>

                    </div>

                    <div id="about" className="pb-20">
                        <span className="font-normal text-primary-800 text-2xl">"A great system to add some competitive edge during competition sessions."</span>
                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam sed risus tempor aliquet. Morbi non turpis sit amet lorem auctor efficitur. Ut hendrerit mollis nulla, id laoreet enim volutpat feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut id purus ac lorem tincidunt ornare.</p>
                    </div>

            </div></div>

        </Layout>
    )
}
