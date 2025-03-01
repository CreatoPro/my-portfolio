import { useState, useEffect } from "react";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import { HireMe2 } from "@/components/HireMe2";

const API_KEY = "AIzaSyAIggvSvfDXM2gF5pUPs7C7wqlCvcJPzjA";
const CHANNEL_ID = "UCwihQJIVn-6Qus5Z92zVDoQ";
const MAX_RESULTS = 4;

const FeaturedArticle = ({ img, title, link }) => {
  return (
    <li className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl dark:bg-dark dark:border-light">
      <Link href={link} target="_blank" className="inline-block rounded-lg overflow-hidden w-full">
        <motion.img src={img} alt={title} className="w-full max-h-80 object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">{title}</h2>
      </Link>
    </li>
  );
};

export default function Articels() {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [prevPageToken, setPrevPageToken] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async (pageToken = "") => {
    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&type=video&maxResults=${MAX_RESULTS}&pageToken=${pageToken}&videoDuration=medium`);
      const data = await response.json();
      setVideos(data.items);
      setNextPageToken(data.nextPageToken || null);
      setPrevPageToken(data.prevPageToken || null);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <>
      <Head>
        {/* Canonical URL to Avoid Duplicate Content Issues */}
        <link rel="canonical" href="https://shreesat-sahu.vercel.app/videos" />

        {/* Page Title */}
        <title>Videos | Shreesat Sahu's Portfolio</title>

        {/* Meta Description (for SEO) */}
        <meta name="description" content="Watch the latest YouTube videos from Shreesat Sahu. Explore content on web development, tech insights, and personal vlogs." />

        {/* Open Graph (OG) Meta Tags for Social Media (Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Videos | Shreesat Sahu's Portfolio" />
        <meta property="og:description" content="Check out the latest YouTube videos from Shreesat Sahu covering web development, tech, and vlogs." />
        <meta property="og:image" content="https://shreesat-sahu.vercel.app/default-og-image.jpg" />
        <meta property="og:url" content="https://shreesat-sahu.vercel.app/videos" />
        <meta property="og:site_name" content="Shreesat Sahu's Portfolio" />

        {/* Twitter Card for Better Twitter Previews */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Videos | Shreesat Sahu's Portfolio" />
        <meta name="twitter:description" content="Explore the latest videos by Shreesat Sahu on YouTube. Stay updated with tech, web development, and personal vlogs." />
        <meta name="twitter:image" content="https://shreesat-sahu.vercel.app/default-og-image.jpg" />
        <meta name="twitter:creator" content="@shreesatsahu" />

        {/* Robots Meta Tag for Indexing */}
        <meta name="robots" content="index, follow" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Beyond the Code: My Life in Motion 🎥" className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          {videos ? (
            <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
              {videos.map((video) => (
                <FeaturedArticle key={video.id.videoId} img={video.snippet.thumbnails.high.url} title={video.snippet.title} link={`https://www.youtube.com/watch?v=${video.id.videoId}`} />
              ))}
            </ul>
          ) : (
            <p className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">No videos found!</p>
          )}
          <div className={`mt-8 flex ${prevPageToken ? " justify-between" : "justify-end"}  gap-4`}>
            {prevPageToken && (
              <button onClick={() => fetchVideos(prevPageToken)} className="px-4 py-2 bg-gray-800 text-white rounded-lg">
                Previous
              </button>
            )}
            {nextPageToken && (
              <button onClick={() => fetchVideos(nextPageToken)} className="px-4 py-2 bg-gray-800 text-white rounded-lg">
                Next
              </button>
            )}
          </div>
          <HireMe2 />
        </Layout>
      </main>
    </>
  );
}
