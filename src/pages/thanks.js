import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import Link from "next/link";

export default function Thanks() {
  return (
    <>
      <Head>
        {/* Canonical URL to Avoid Duplicate Content Issues */}
        <link rel="canonical" href="https://shreesat-sahu.vercel.app/thank-you" />

        {/* Page Title */}
        <title>Thank You | Shreesat Sahu's Portfolio</title>

        {/* Meta Description (for SEO) */}
        <meta name="description" content="Thank you for reaching out! I appreciate your message and will get back to you soon." />

        {/* Open Graph (OG) Meta Tags for Social Media (Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Thank You | Shreesat Sahu's Portfolio" />
        <meta property="og:description" content="Thank you for getting in touch! I'll review your message and respond as soon as possible." />
        <meta property="og:image" content="https://shreesat-sahu.vercel.app/default-og-image.jpg" />
        <meta property="og:url" content="https://shreesat-sahu.vercel.app/thank-you" />
        <meta property="og:site_name" content="Shreesat Sahu's Portfolio" />

        {/* Twitter Card for Better Twitter Previews */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thank You | Shreesat Sahu's Portfolio" />
        <meta name="twitter:description" content="I appreciate your message! I'll get back to you as soon as possible." />
        <meta name="twitter:image" content="https://shreesat-sahu.vercel.app/default-og-image.jpg" />
        <meta name="twitter:creator" content="@shreesatsahu" />

        {/* Robots Meta Tag for Indexing */}
        <meta name="robots" content="noindex, follow" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 text-center">
          <AnimatedText text="Thank You for Reaching Out! 🙌" className="mb-16 !text-7xl !leading-tight lg:!text-6xl sm:!text-5xl xs:!text-3xl sm:mb-8" />

          <p className="text-lg sm:text-base text-dark/75 dark:text-light/75">I appreciate your message. I'll get back to you as soon as possible!</p>

          <div className="mt-8">
            <Link href="/" className="px-6 py-3 font-bold capitalize  bg-light border border-solid border-dark dark:border-light dark:bg-light rounded-md hover:bg-dark text-dark dark:hover:text-light dark:hover:bg-dark dark:hover:border-light hover:text-light">
              Back to Home
            </Link>
          </div>
        </Layout>
      </main>
    </>
  );
}
