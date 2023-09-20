import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";
var siteTitle = "Verglas";

export default function Layout({ children, title }) {
	return (
		<>
			<Navbar />
			<div className="flex flex-row justify-center">
				<Head>
					<meta content="Verglas" property="og:title" />
					<meta
						content="Description"
						property="og:description"
					/>
					<meta content="https://verglas.io" property="og:url" />
					<meta content="#9233ea" data-react-helmet="true" name="theme-color" />
					<title>{title ? title + " | " + siteTitle : siteTitle}</title>
				</Head>
				<main className="justify-around">{children}</main>
			</div>
			<Footer />
		</>
	);
}
