import Head from "next/head";
import React from "react";
import Layout from "../components/layout";

export default function Index() {
	return (
		<Layout title={"Home"}>
            <div className="h-[95vh] w-screen bg-hero bg-cover relative" id="hero">
                <div className="absolute bottom-20 left-20 text-8xl font-extrabold">
                    <div className="bg-white px-4 py-3 w-fit">
                        <span className="bg-gradient-to-r from-fuchsia-600 to-sky-400 bg-clip-text text-transparent">
                            Inspiring the
                        </span>
                    </div>
                    <div className="bg-white px-4 py-3 pb-4 w-fit">
                        <span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">
                            next generation.
                        </span>
                    </div>
                </div>
            </div>
            <div className="h-screen w-screen">

            </div>
        </Layout>
    )
}
