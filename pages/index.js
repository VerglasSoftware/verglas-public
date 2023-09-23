import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";

import { getSortedPostsData } from '../lib/post';

export default function Index({ allPostsData }) {
	return (
		<Layout title={"Home"}>
            <div className="h-[95vh] w-screen bg-hero bg-cover relative" id="hero">
                <div className="absolute bottom-20 left-20 text-8xl font-extrabold hidden sm:block">
                    <div className="bg-white px-4 py-3 w-fit">
                        <span className="bg-gradient-to-r from-fuchsia-600 to-sky-400 bg-clip-text text-transparent">
                            inspiring the
                        </span>
                    </div>
                    <div className="bg-white px-4 py-3 pb-4 w-fit">
                        <span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">
                            next generation.
                        </span>
                    </div>
                </div>
            </div>

            <div className="w-screen flex items-center justify-center"><div className="w-2/3">
                    <div id="about" className=" py-20">
                        <span className="font-extrabold text-neutral-700 text-5xl">hey. we're verglas.</span>
                        <div className="grid grid-cols-2 gap-12 mt-14 text-neutral-700">
                            <div>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis finibus pellentesque. Ut vestibulum tortor id libero finibus, a eleifend libero lobortis. Morbi vel lacus laoreet, dignissim diam eu, sagittis nibh. Ut dapibus a augue eu facilisis. Ut pulvinar quis nunc vitae elementum. Praesent volutpat lacus a nisl hendrerit suscipit. Nulla pulvinar ligula vel bibendum finibus.
                                </p>
                                <p className="pt-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis finibus pellentesque. Ut vestibulum tortor id libero finibus, a eleifend libero lobortis. Morbi vel lacus laoreet, dignissim diam eu, sagittis nibh. Ut dapibus a augue eu facilisis. Ut pulvinar quis nunc vitae elementum. Praesent volutpat lacus a nisl hendrerit suscipit. Nulla pulvinar ligula vel bibendum finibus.
                                </p>
                                <p className="pt-6 pb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo sapien et sem elementum accumsan. Sed odio nisi, auctor ac dictum et, aliquet at risus.
                                </p>
                                <Link href="" className="font-bold hover:underline text-primary-600 decoration-primary-600 decoration-2 underline-offset-[5px]">Learn more...</Link>
                            </div>
                            <div className="flex justify-center items-center relative">
                            <div className="bg-red-900 w-64 h-56 absolute right-44 top-60 z-10 shadow-xl">
                                <Image
                                src={"/images/DSC01903.jpeg"}
                                fill={true}
                                style={{objectFit: "cover", objectPosition: "-65px"}}
                                />
                            </div>
                            <div className="bg-blue-900 w-[22rem] h-[26rem] absolute right-0 top-0">
                            <Image
                                src={"/images/DSC01890.jpeg"}
                                fill={true}
                                style={{objectFit: "cover", objectPosition: ""}}
                            />
                            </div>
                            </div>
                        </div>
                    </div>
            </div></div>

            <div className="w-screen flex items-center justify-center bg-primary-600 text-primary-100 hidden"><div className="w-2/3">
                    <div id="impact" className="py-14 flex items-center flex-col">
                        <span className="font-extrabold text-4xl">our impact.</span>
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
                        </div>
                    </div>
            </div></div>

            <div className="w-screen flex items-center justify-center hidden"><div className="w-2/3">
                    <div id="committees" className=" py-20">
                        <div className="grid grid-cols-2 gap-12 mt-14 text-neutral-700">
                            <div>
                                <button className="hover:bg-primary-100 w-full" onClick={() => {
                                    window.location.href = '/outreach'
                                }}>
                                    <div className="w-full h-64 relative">
                                        <Image
                                        src={"/images/IMG_8406.jpg"}
                                        fill={true}
                                        style={{objectFit: "cover", objectPosition: ""}}
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col items-start">
                                        <span className="font-extrabold text-neutral-700 text-4xl">outreach.</span>
                                        <p className="text-start my-3">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis finibus pellentesque. Ut vestibulum tortor id libero finibus, a eleifend libero lobortis. Morbi vel lacus laoreet, dignissim diam eu, sagittis nibh. Ut dapibus a augue eu facilisis. Ut pulvinar quis nunc vitae elementum. Praesent volutpat lacus a nisl hendrerit suscipit. Nulla pulvinar ligula vel bibendum finibus.
                                        </p>
                                        <Link href="/outreach" className="font-bold hover:underline text-primary-600 decoration-primary-600 decoration-2 underline-offset-[5px]">Learn more...</Link>
                                    </div>
                                </button>
                            </div>
                            <div>
                                <button className="hover:bg-primary-100 w-full" onClick={() => {
                                    window.location.href = '/products'
                                }}>
                                    <div className="w-full h-64 relative">
                                        <Image
                                        src={"/images/DSC01868.jpeg"}
                                        fill={true}
                                        style={{objectFit: "cover", objectPosition: ""}}
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col items-start">
                                        <span className="font-extrabold text-neutral-700 text-4xl">software.</span>
                                        <p className="text-start my-3">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis finibus pellentesque. Ut vestibulum tortor id libero finibus, a eleifend libero lobortis. Morbi vel lacus laoreet, dignissim diam eu, sagittis nibh. Ut dapibus a augue eu facilisis. Ut pulvinar quis nunc vitae elementum. Praesent volutpat lacus a nisl hendrerit suscipit. Nulla pulvinar ligula vel bibendum finibus.
                                        </p>
                                        <Link href="/products" className="font-bold hover:underline text-primary-600 decoration-primary-600 decoration-2 underline-offset-[5px]">Learn more...</Link>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
            </div></div>
            
            <div className="w-screen flex items-center justify-center bg-primary-600 text-primary-100 hidden"><div className="w-2/3">
                    <div id="partners" className="py-14 flex items-center flex-col">
                        <span className="font-extrabold text-4xl">who we've worked with.</span>
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
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 relative">
                                    <Image
                                    src={"/images/credit-logo.png"}
                                    fill={true}
                                    style={{objectFit: "contain", objectPosition: ""}}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-28 h-24 relative">
                                    <Image
                                    src={"/images/logo.png"}
                                    fill={true}
                                    style={{objectFit: "contain", objectPosition: ""}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
            </div></div>

            <div className="w-screen flex items-center justify-center"><div className="w-2/3">
                    <div id="news" className=" py-20">
                        <span className="font-extrabold text-neutral-700 text-3xl">verglas news & press releases.</span>
                        <div className="grid grid-cols-4 gap-6 mt-14 text-neutral-700">

                            {
                                allPostsData.map(post => {
                                    return (
                                        <button className="hover:bg-primary-100 w-full" onClick={() => {
                                            window.location.href = `/press/${post.date.split('-')[0] + '-' + post.date.split('-')[1]}/${post.slug}`;
                                        }}>
                                <div className="w-full h-36 relative">
                                    <Image
                                    src={post.image}
                                    fill={true}
                                    style={{objectFit: "cover", objectPosition: ""}}
                                    />
                                </div>
                                <div className="px-1 py-4 flex flex-col items-start">
                                    <span className="font-extrabold text-neutral-700 text-xl text-start">{post.title.toLowerCase()}</span>
                                    <p className="text-start my-1 text-neutral-400">
                                        on {new Date(post.date).toLocaleDateString('en-gb', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })}
                                    </p>
                                    <Link href={`/press/${post.date.split('-')[0] + '-' + post.date.split('-')[1]}/${post.slug}`} className="font-bold hover:underline text-primary-600 decoration-primary-600 decoration-2 underline-offset-[5px]">Read more...</Link>
                                </div>
                            </button>
                                    )
                                })
                            }                                

                        </div>
                    </div>
            </div></div>

        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
  }