import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Head>
        {/* Canonical URL to Avoid Duplicate Content Issues */}
        <link rel="canonical" href="https://shreesat-sahu.vercel.app/404" />

        {/* Page Title */}
        <title>404 - Page Not Found | Shreesat Sahu's Portfolio</title>

        {/* Meta Description (for SEO) */}
        <meta name="description" content="Oops! The page you're looking for doesn't exist. Return to the homepage and explore Shreesat Sahu's portfolio." />

        {/* Open Graph (OG) Meta Tags for Social Media (Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="404 - Page Not Found | Shreesat Sahu's Portfolio" />
        <meta property="og:description" content="This page doesn't exist. Explore my projects and portfolio to learn more about my work." />
        <meta property="og:image" content="https://shreesat-sahu.vercel.app/default-og-image.jpg" />
        <meta property="og:url" content="https://shreesat-sahu.vercel.app/404" />
        <meta property="og:site_name" content="Shreesat Sahu's Portfolio" />

        {/* Twitter Card for Better Twitter Previews */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="404 - Page Not Found | Shreesat Sahu's Portfolio" />
        <meta name="twitter:description" content="Lost? Don't worry! Head back to the homepage and explore my portfolio." />
        <meta name="twitter:image" content="https://shreesat-sahu.vercel.app/default-og-image.jpg" />
        <meta name="twitter:creator" content="@shreesatsahu" />

        {/* Robots Meta Tag (Prevents Indexing of the 404 Page) */}
        <meta name="robots" content="noindex, follow" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TransitionEffect />
      <main className="h-[100vh] w-full dark:bg-dark ">
        <Layout className="relative !bg-transparent !pt-16 flex flex-col items-center justify-center">
          <AnimatedText text="404" className=" " />
          <AnimatedText text="Page Not Found." className=" !text-7xl " />
          <Link
            href="/"
            className="self-center !mt-4 inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2
        font-semibold text-light hover:border-dark hover:bg-light hover:text-dark 
        dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
        "
          >
            Go To Home
          </Link>
        </Layout>
      </main>
    </>
  );
};

export default NotFound;
