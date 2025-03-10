import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { HireMe2 } from "@/components/HireMe2";

import proj1 from "../../public/images/projects/clay-theme.png";

import allenNext from "../../public/images/projects/allen-next.png";
import swap from "../../public/images/projects/swap.png";
import dgcare from "../../public/images/projects/2050-dgcare.png";
import allenDigital from "../../public/images/projects/allen-digital.png";
import allenDigitalApp from "../../public/images/projects/allen-digital-app.png";
import allenEstore from "../../public/images/projects/allen-estore.png";
import iigAcademy from "../../public/images/projects/iig-academy.png";
import iigVarsity from "../../public/images/projects/iig-varsity.png";
import sambitGroup from "../../public/images/projects/sabit-group.png";

import TransitionEffect from "@/components/TransitionEffect";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link href={link} target={"_blank"} className="relative" onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base sm:self-start">{title}</h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span
        className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm"
      >
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedProject = ({ type, title, summary, img, link, github, tools }) => {
  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link href={link} className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <FramerImage
          src={img}
          className="h-auto w-full object-cover"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-light xs:text-base">{type}</span>
        <span className="text-xl font-medium text-primaryDark dark:text-primaryDark xs:text-base">{tools}</span>
        <Link href={link} className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">{title}</h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="
           flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base gap-1"
            aria-label="Project link"
          >
            Link
            <LinkArrow />
          </Link>
          <Link
            href={link}
            className="ml-4 
              p-2 px-6 text-lg font-semibold
             sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base"
            aria-label="Project Details"
          >
            Project Details
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, tools }) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]"
      />

      <Link href={link} className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-light lg:text-lg md:text-base">{type}</span>
        <span className="text-xl font-medium text-primaryDark dark:text-primaryDark xs:text-base">{tools}</span>

        <Link href={link} className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">{title}</h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            className="rounded-lg
              mt-2 px-6 py-2 text-lg font-semibold
             sm:px-4 sm:text-base  border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
            "
            aria-label={title}
          >
            Project Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        {/* Canonical URL to Avoid Duplicate Content Issues */}
        <link rel="canonical" href="https://shreesat-sahu.vercel.app/projects" />

        {/* Page Title */}
        <title>Projects | Shreesat Sahu</title>

        {/* Meta Description (for SEO) */}
        <meta name="description" content="Explore projects by Shreesat Sahu – A full-stack developer and tech enthusiast. Check out open-source contributions, web applications, and more." />

        {/* Open Graph (OG) Meta Tags for Social Media (Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Projects | Shreesat Sahu" />
        <meta property="og:description" content="Check out innovative projects by Shreesat Sahu, built with modern web technologies like Next.js, React, and Node.js." />
        <meta property="og:image" content="https://shreesat-sahu.vercel.app/api/og?title=Shreesat%20Sahu" />
        <meta property="og:url" content="https://shreesat-sahu.vercel.app/projects" />
        <meta property="og:site_name" content="Shreesat Sahu's Portfolio" />

        {/* Twitter Card for Better Twitter Previews */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects | Shreesat Sahu" />
        <meta name="twitter:description" content="Explore Shreesat Sahu’s portfolio projects, open-source work, and technical achievements in full-stack development." />
        <meta name="twitter:image" content="https://shreesat-sahu.vercel.app/api/og?title=Shreesat%20Sahu" />
        <meta name="twitter:creator" content="@shreesatsahu" />

        {/* Robots Meta Tag for Indexing */}
        <meta name="robots" content="index, follow" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TransitionEffect />
      <main className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}>
        <Layout className="pt-16">
          <AnimatedText text="💡From Code to Creation - Bringing Ideas to Life!" className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Frontend Development"
                tools="Next.js | Bootstrap | Git"
                title="Allen NExT"
                summary="A platform designed for NEET aspirants, where experienced MBBS doctors mentor and teach students to help them excel in their medical entrance exams."
                img={allenNext}
                date="2023"
                link={`/projects/allen-next`}
                github="https://www.allennext.com/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project type="Full Stack Devlopment" tools="React Native | MongoDB | NodeJs | AWS" title="Swap | Lend Faster" img={swap} date="2023" link="/projects/swap-lend-faster" github="https://play.google.com/store/apps/details?id=com.shreesat.Swap&gl=in" />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project type="E-Commerce Development" tools="Shopify" title="Allen Estore" img={allenEstore} date="2023" link="/projects/allen-estore" github="https://estore.allen.ac.in/" />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project type="UX & Development" tools="REACT Js | Bootstrap" title="Allen Digital" img={allenDigital} date="2023" link="/projects/allen-digital" github="https://digital.allen.ac.in/login" />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project type="Design & Development" tools="HTML | CSS | JavaScript | PHP" title="IIG Academy" img={iigAcademy} date="2023" link="/projects/iig-academy" github="https://iigacademy.com/" />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project type="Frontend Development" tools="Flutter" title="2050 Healthcare App" img={dgcare} date="2023" link="/projects/2050-healthcare-app" github="https://travislord.xyz/projects/2050-healthcare-app" />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project type="Frontend Development" tools="React Native | AWS IVS" title="Allen Digital App (Depricated App)" img={allenDigitalApp} date="2023" link="/projects/allen-digital-app" github="" />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project type="Frontend Development" tools="Wordpress" title="IIG Varsity" img={iigVarsity} date="2023" link="/projects/iig-varsity" github="https://www.iigvarsity.com/" />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project type="Frontend Development" tools="Wordpress" title="Sambit Hotels" img={sambitGroup} date="2023" link="/projects/sambit-hotels" github="https://sambitgroup.com/" />
            </div>
          </div>

          <div>
            <ul className="flex flex-col items-center relative pt-16">{/* <Article title="Adding more soon, thanks for the interest!" img={loading} time="1 min read" date="" link="https://github.com/lilxyzz/" /> */}</ul>

            <div className="mt-2 flex items-center justify-between gap-3 grid-cols-2">
              <Link
                href="/videos/"
                target={"_self"}
                className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
              >
                My Life in Motion
              </Link>
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
            </div>
            <HireMe2 />
          </div>
        </Layout>
      </main>
    </>
  );
}
