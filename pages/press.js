import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";

import { BsGithub, BsGlobeEuropeAfrica, BsLinkedin } from "react-icons/bs";

import { getSortedPostsData } from '../lib/post';

export default function Press({ allPostsData }) {
	return (
		<Layout title={"Press centre"}>
            <div className="h-[30vh] w-screen bg-hero5 bg-center bg-cover relative" id="hero">
                <div className="absolute bottom-10 left-20 text-7xl font-extrabold">
                    <div className="bg-white px-4 py-3 pb-4 w-fit">
                        <span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">
                            press centre.
                        </span>
                    </div>
                </div>
            </div>

            <div className="w-screen flex items-center justify-center"><div className="w-3/4">
                    <div id="about" className="py-20 grid grid-cols-2 gap-12">
                        <div className="grid grid-cols-3 gap-4">
                            <div></div>
                            <div className="col-span-2">
                                <span className="font-bold text-neutral-700 text-4xl text-start">transparency and honesty.</span>
                                <div className="flex justify-start items-start mt-3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam sed risus tempor aliquet. Morbi non turpis sit amet lorem auctor efficitur. Ut hendrerit mollis nulla, id laoreet enim volutpat feugiat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {
                                allPostsData.map((post) => {
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
