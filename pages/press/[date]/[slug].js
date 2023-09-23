import Head from "next/head";
import React from "react";
import Layout from "../../../components/layout";
import Link from "next/link";
import Image from "next/image";

import { getAllPostIds, getPostData } from '../../../lib/post';

import { BsGithub, BsGlobeEuropeAfrica, BsLinkedin } from "react-icons/bs";

export default function Post({ postData }) {
	return (
		<Layout title={postData.title}>
            <div className="h-[25vh] w-screen bg-center bg-cover relative" id="hero" style={{
                backgroundImage: `url('${postData.image}')`
            }}>
                <div className="sm:absolute sm:pt-0 pt-16 sm:bottom-10 left-20 text-5xl font-extrabold">
                    <div className="bg-white px-4 py-3 pb-4 w-fit">
                        <span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">
                            {postData.title}
                        </span>
                    </div>
                </div>
            </div>

            <div className="w-screen flex items-center justify-center"><div className="w-3/4 sm:w-1/2">
                    <div id="about" className="py-20 gap-12">

                    <p className="text-start mb-10 text-neutral-400">
                                        on {new Date(postData.date).toLocaleDateString('en-gb', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })}
                                    </p>
                    
                        <article className="prose" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  
                    </div>
            </div></div>

        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.date, params.slug);
    return {
        props: {
        postData,
        },
    };
}