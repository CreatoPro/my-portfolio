import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
      <LiIcon reference={ref} />
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a className="capitalize text-slideGreen dark:text-primaryDark" href={companyLink} target={"_blank"}>
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Experience</h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Developer"
            company="IIG Technology"
            time="Dec 2024 - Present"
            address="Bhubaneswar, Odisha"
            companyLink="https://iigtechnology.in/"
            work="At IIG Technology, I work as a Software Developer, contributing to the design and development of scalable web and mobile applications. My role involves architecting efficient backend systems, optimizing database performance, and ensuring seamless API integrations. I collaborate with cross-functional teams to enhance system performance and solve complex technical challenges. Working with technologies like React, Next.js, Node.js, Laravel, and MongoDB, I focus on building high-performance applications. One of my key contributions has been optimizing existing codebases, reducing load times, and improving overall system efficiency. My passion for problem-solving and continuous learning drives me to explore innovative solutions and stay ahead in the ever-evolving tech landscape."
          />

          <Details
            position="Assistant Manager"
            company="Allen Digital"
            time="Jan 2023 - Dec 2024"
            address="Kota, Rajasthan"
            companyLink="https://allen.in/"
            work="At Allen Digital, I played a key role in developing and maintaining their digital platforms. Initially, I worked on the Allen Digital Platform, which was built using React, ensuring seamless performance and user experience. I then transitioned to Allen Next, a Next.js-based project where I leveraged Tailwind CSS and Vercel for optimized performance and scalability. My contributions extended beyond development and then I led the implementation of Allen E-Store, a major e-commerce initiative built on Shopify, streamlining the online sales process. Additionally, I worked extensively on their ERP systems, optimizing workflows and improving operational efficiency. My expertise also contributed to a high-priority project in Bangalore, where I collaborated with cross-functional teams to deliver impactful digital solutions."
          />

          <Details
            position="Assistant Manager"
            company="Allen Digital"
            time="June 2022 - Dec 2022"
            address="Hyderabad, Telangana"
            companyLink="https://allen.in/"
            work="At Allen Digital, I was the first hire at their Hyderabad office, playing a pivotal role in both technical and operational aspects. I worked on their POC project, developing a React Native and Node.js-based platform, where I led the implementation of AWS IVS (Interactive Video Service) for seamless video streaming. Additionally, I contributed to the development of their online video consultation system, ensuring smooth integration and user experience. Beyond my technical responsibilities, I managed office operations, coordinated directly with HR from Kota for onboarding new team members, and helped establish a productive work environment in Hyderabad. My role required a blend of leadership, problem-solving, and technical expertise to drive the success of Allen Digital's expansion."
          />

          <Details
            position="SMM and Web Dev Intern"
            company="IIG Varsity"
            time="May 2021 - Sept 2021"
            address="Bhubaneswar, Odisha"
            companyLink="https://www.iigvarsity.com/"
            work="As a Social Media Marketing (SMM) and Web Development Intern at IIG Varsity, I managed both paid and organic social media campaigns to enhance brand visibility. I worked on their existing website, optimizing it for better user engagement. Additionally, I designed and developed a new WordPress-based website, focusing on a visually appealing and user-friendly experience. Although the site didn’t go live, it was well-received for its design-centric approach. This role allowed me to blend my marketing and technical skills, gaining hands-on experience in digital outreach and web development."
          />
        </ul>
      </div>
      <div className="mt-40 flex items-center justify-between gap-3 grid-cols-2">
        <Link
          href="/projects/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Projects
        </Link>
        <Link
          href="/videos/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
        >
          My Life in Motion
        </Link>
      </div>
    </div>
  );
};

export default Experience;
