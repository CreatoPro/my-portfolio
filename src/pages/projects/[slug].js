import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { GithubIcon, LinkArrow } from "@/components/Icons";
import { DevIcon } from "@/components/Icons";
import projects from "@/data/projectsData";
import proj1 from "/public/images/projects/clay-theme.png";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function ProjectPage() {
  const router = useRouter();
  const [project, setProject] = useState(null);

  useEffect(() => {
    console.log("Router ready:", router.isReady);
    console.log("Router query:", router.query);

    if (router.isReady && router.query.slug) {
      const currentSlug = router.query.slug;
      console.log("Current Slug:", currentSlug);

      const foundProject = projects.find((proj) => proj.slug === currentSlug) || null;
      console.log("Found Project:", foundProject);

      setProject(foundProject);
    }
  }, [router.isReady, router.query.slug]);

  if (!router.isReady || !router.query.slug) {
    return <h1 className="text-center text-2xl font-bold capitalize text-dark/75 dark:text-light/75">Loading...</h1>;
  }

  if (!project) {
    return <h1 className="text-center text-2xl font-bold capitalize text-dark/75 dark:text-light/75">Project Not Found 😢</h1>;
  }

  return (
    <>
      <Head>
        {/* Canonical URL to Avoid Duplicate Content Issues */}
        <link rel="canonical" href="https://shreesat-sahu.vercel.app/projects/{project?.slug}" />

        {/* Page Title */}
        <title>Shreesat Worked on this Project | {project?.title}</title>

        {/* Meta Description (for SEO) */}
        <meta name="description" content={`Explore the details of ${project?.title} - a project I worked on using modern web technologies. Learn more about the development process and features.`} />

        {/* Open Graph (OG) Meta Tags for Social Media (Facebook, LinkedIn) */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`Shreesat Worked on this Project | ${project?.title}`} />
        <meta property="og:description" content={`Discover how I built ${project?.title} using modern web technologies. Check out the features and development insights.`} />
        <meta property="og:image" content={project?.ogImage || "https://shreesat-sahu.vercel.app/default-og-image.jpg"} />
        <meta property="og:url" content={`https://shreesat-sahu.vercel.app/projects/${project?.slug}`} />
        <meta property="og:site_name" content="Shreesat Sahu's Portfolio" />

        {/* Twitter Card for Better Twitter Previews */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Shreesat Worked on this Project | ${project?.title}`} />
        <meta name="twitter:description" content={`Learn more about ${project?.title}, a project I developed using cutting-edge technologies.`} />
        <meta name="twitter:image" content={project?.ogImage || "https://shreesat-sahu.vercel.app/default-og-image.jpg"} />
        <meta name="twitter:creator" content="@shreesatsahu" />

        {/* Robots Meta Tag for Indexing */}
        <meta name="robots" content="index, follow" />

        {/* Google Site Verification */}
        <meta name="google-site-verification" content="nLSM6d-tIBbavR-eejEMQ0Hh4fyATMWCcMbQbmvb6o8" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TransitionEffect />
      <main className={`flex  w-full flex-col items-center justify-center dark:text-light`}>
        <Layout className="pt-16">
          <AnimatedText text={project?.title} className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">{project?.work}</h2>
              <h3 className="mb-4 text-lg font-bold  text-lightGreen dark:text-primaryDark">{project?.tools}</h3>
              <div classNname="w-full border-2 border-solid border-light bg-light"></div>
              <p className="">{project?.description}</p>
              <h4 className="mt-4 text-lg font-800 capitalize text-dark/75 dark:text-light/75">{project?.freaturedLine}</h4>
              <p className="my-4">{project?.description2}</p>

              <div className="mt-2 flex items-center grid-cols-8 gap-4 sm:gap-8">
                {!project?.link ? (
                  <></>
                ) : (
                  <Link
                    className="
              p-2 px-6 text-lg font-semibold
             sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base flex items-center gap-1"
                    aria-label="Visit Theme Demo"
                    href={project?.link}
                    target={"_blank"}
                  >
                    Visit Live
                    <LinkArrow />
                  </Link>
                )}
                {/* <Link href="https://github.com/lilxyzz/clay-theme" target={"_blank"} className="w-10" aria-label="github link">
                  <GithubIcon />
                </Link>
                <Link href="https://dev.to/lilxyzz/clay-theme-unlocking-the-power-of-gatsby-v5-and-netlifycms-with-clay-theme-njn" target={"_blank"} className="w-10" aria-label="github link">
                  <DevIcon />
                </Link> */}
              </div>
            </div>
            <div
              className="relative col-span-4 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            "
            >
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={project?.img}
                alt={project?.title}
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                height={500}
                width={800}
                priority
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
