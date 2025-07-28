import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";
import type { LayoutProps } from "@/types";

const siteTitle = "Verglas";

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Helmet>
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
        <meta property="og:title" content="Verglas" />
        <meta property="og:description" content="Description" />
        <meta property="og:url" content="https://verglas.io" />
        <meta name="theme-color" content="#6049d1" data-react-helmet="true" />
      </Helmet>
      <Navbar />
      <div className="flex flex-row justify-center">
        <main className="justify-around">{children}</main>
      </div>
      <Footer />
    </>
  );
}
