import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/Riley.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { HireMe2 } from "@/components/HireMe2";
import Link from "next/link";

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

export default function About() {
  return (
    <>
      <Head>
        {/* Canonical URL to Avoid Duplicate Content Issues */}
        <link rel="canonical" href="https://shreesat-sahu.vercel.app/about" />

        {/* Page Title */}
        <title>About | Shreesat Sahu's Portfolio</title>

        {/* Meta Description (for SEO) */}
        <meta name="description" content="Learn more about Shreesat Sahu and his open-source portfolio built with Next.js. Explore projects, skills, and experiences." />

        {/* Open Graph (OG) Meta Tags for Social Media (Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About | Shreesat Sahu's Portfolio" />
        <meta property="og:description" content="Discover the story behind Shreesat Sahu's open-source portfolio theme built with Next.js. Explore his projects, skills, and experiences." />
        <meta property="og:image" content="https://shreesat-sahu.vercel.app/default-og-image.jpg" />
        <meta property="og:url" content="https://shreesat-sahu.vercel.app/about" />
        <meta property="og:site_name" content="Shreesat Sahu's Portfolio" />

        {/* Twitter Card for Better Twitter Previews */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | Shreesat Sahu's Portfolio" />
        <meta name="twitter:description" content="Learn more about Shreesat Sahu, a full-stack developer and tech enthusiast. Explore his work and open-source projects." />
        <meta name="twitter:image" content="https://shreesat-sahu.vercel.app/default-og-image.jpg" />
        <meta name="twitter:creator" content="@shreesatsahu" />

        {/* Robots Meta Tag for Indexing */}
        <meta name="robots" content="index, follow" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TransitionEffect />
      <main className={`flex  w-full flex-col items-center justify-center dark:text-light`}>
        <Layout className="pt-16">
          <AnimatedText text="Building the Future, One Line at a Time 🚀" className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">BIOGRAPHY</h2>
              <p className="font-medium">
                I'm Shreesat, a passionate software developer with expertise in both web and mobile development. I specialize in building seamless user experiences using React, Next.js, and Flutter, along with backend technologies like Node.js, Express, and MongoDB. My work focuses on crafting
                high-performance applications that are both scalable and intuitive.
              </p>
              <p className="my-4 font-medium">
                Throughout my career, I have worked on a variety of projects, from creating dynamic web platforms to developing mobile applications that enhance user engagement. One of my key projects involved optimizing a large-scale system for better efficiency and scalability, while another
                focused on building a feature-rich mobile app with real-time interactions. I am constantly learning and pushing my boundaries to stay ahead in the ever-evolving tech landscape.
              </p>
              <p className="my-4 font-medium">
                P.S. When I'm not coding, I’m creating content for my <Link href="www.youtube.com/@shreesat">YouTube channel 🟥</Link> and exploring new tech trends. 🚀
              </p>
            </div>
            <div
              className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
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
                className="h-auto w-full rounded-2xl border-2 border-solid border-dark"
                priority={true}
                src={profile}
                alt="Travis Lord"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <div
              className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
md:order-3 xl:items-center"
            >
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={1500} />+
                </span>
                <h3
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Hours of Code Written
                </h3>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={200} />+
                </span>
                <h3
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Features Shipped
                </h3>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={100} />+
                </span>
                <h3
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Debugging Sessions
                </h3>
              </div>
            </div>

            <HireMe2 />
          </div>

          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
}
