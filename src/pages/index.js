import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import profilePic from "../../public/images/profile/Riley.png";
import LatestXPost from "@/components/LatestXPost";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <>
      <Head>
        {/* Page Title */}
        <title>Shreesat Sahu | Full-Stack Developer & Tech Enthusiast</title>

        {/* Meta Description (for SEO) */}
        <meta name="description" content="Shreesat Sahu's portfolio - A passionate full-stack developer and tech geek. Explore my projects, skills, and more." />

        {/* Open Graph (OG) Meta Tags for Social Media (Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shreesat Sahu | Full-Stack Developer & Tech Enthusiast" />
        <meta property="og:description" content="Shreesat Sahu's portfolio - A passionate full-stack developer and tech geek. Explore my projects, skills, and more." />
        <meta property="og:image" content="https://shreesat-sahu.vercel.app/api/og?title=My%20Dynamic%20OG%20Image" />
        <meta property="og:url" content="https://shreesat-sahu.vercel.app/" />
        <meta property="og:site_name" content="Shreesat Sahu's Portfolio" />

        {/* Twitter Card for Better Twitter Previews */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shreesat Sahu | Full-Stack Developer & Tech Enthusiast" />
        <meta name="twitter:description" content="Explore my projects, skills, and experiences as a passionate full-stack developer and tech geek." />
        <meta name="twitter:image" content="https://shreesat-sahu.vercel.app/api/og?title=My%20Dynamic%20OG%20Image" />
        <meta name="twitter:creator" content="@shreesatsahu" />

        {/* Canonical URL to Avoid Duplicate Content Issues */}
        <link rel="canonical" href="https://shreesat-sahu.vercel.app/" />

        {/* Favicon (Update Path as Needed) */}
        <link rel="icon" href="/favicon.ico" />

        {/* Robots Meta Tag for Indexing */}
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="nLSM6d-tIBbavR-eejEMQ0Hh4fyATMWCcMbQbmvb6o8" />
      </Head>
      <Analytics />
      <TransitionEffect />
      <article className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}>
        <Layout className="!pt-24 md:!pt-16 sm:!pt-28">
          <div className="flex w-full items-start justify-between md:flex-col pt-10 pb-24">
            <div className="w-1/2 lg:hidden md:flex flex self-center max-h-fit">{<Image priority={true} src={profilePic} alt="Shreesat Sahu" className="h-auto w-100" height={340} width={340} sizes="33vw" />}</div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText text="Hey, I'm Shreesat" className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl" />
              <div className="flex w-full items-center lg:w-full lg:!justify-center sm:!justify-center md:!text-center md:inline-block md:w-full">
                <h2 className="animate-text bg-gradient-to-r from-lightGreen via-lightGreen to-slideGreen bg-clip-text text-transparent font-semibold capitalize !text-5xl xl:!text-4xl lg:!text-4xl md:!text-5xl sm:!text-3xl">
                  I build engaging <b>web</b> and <b>mobile</b> experiences.
                </h2>
              </div>

              <p className="my-4 text-base font-medium md:text-sm sm:!text-sm">
                I'm a software developer with experience in both web and mobile development. I specialize in React, Next.js, and Flutter, crafting intuitive user interfaces and optimizing performance for scalable applications. My work also extends to backend technologies like Node.js, Express
                enabling me to create robust full-stack solutions. Passionate about technology, I continuously explore new frameworks to enhance user experiences.
              </p>

              <div className="mt-2 flex items-center self-start gap-3 grid-cols-2 lg:self-center">
                <Link
                  href="/about/"
                  target={"_self"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                >
                  Get To Know Me
                </Link>
                <Link
                  href="/projects/"
                  target={"_self"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
                >
                  projects
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <div className="fixed right-8 bottom-8 inline-block md:hidden">
          {/* <iframe className="iframe" title="Noongar Seasonal Calendar" width="280" height="120" src="https://seasonal-au.netlify.app/" frameborder="0" allowfullscreen></iframe> */}
          <iframe className="iframe" title="GitHub Contributions" width="280" height="120" src="https://ghchart.rshah.org/gaearon" frameborder="0" allowfullscreen></iframe>
          {/* <iframe className="w-full h-40 rounded-md" src="https://www.youtube.com/embed?listType=user_uploads&list=UCwihQJIVn-6Qus5Z92zVDoQ" frameBorder="0" allowFullScreen></iframe> */}
          {/* <LatestXPost /> */}
        </div>
        <HireMe />
      </article>
    </>
  );
}
