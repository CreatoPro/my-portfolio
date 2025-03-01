import { ImageResponse } from "@vercel/og";
import Image from "next/image";
import profilePic from "../../../public/images/profile/Riley.png";

export const config = {
  runtime: "edge", // Required for @vercel/og
};

export default function handler(req) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Shreesat Sahu's Portfolio";

  return new ImageResponse(
    (
      <main className="flex w-full flex-col items-center justify-center dark:text-light bg-black text-white h-[630px]">
        <div className="flex flex-col items-center text-center">
          <Image src={profilePic} alt="Portfolio Banner" width={400} height={200} className="mb-6 rounded-lg shadow-lg" />
          <h1 className="text-7xl font-bold sm:text-5xl xs:text-3xl">Shreesat Sahu's Portfolio</h1>
        </div>
      </main>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
