import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import Link from "next/link";

export default function Thanks() {
  return (
    <>
      <Head>
        <title>Thank You | ShreesatPortfolio</title>
        <meta name="description" content="Thank you for reaching out!" />
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
