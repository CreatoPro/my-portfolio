import React, { useEffect, useState } from "react";

const LatestXPost = () => {
  const [tweetUrl, setTweetUrl] = useState("");

  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    // Set your latest post URL manually (you’ll need to update this periodically)
    setTweetUrl("https://x.com/shreesatsahu/status/1760275307911383135");
  }, []);

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg shadow-lg w-80">
      <blockquote className="twitter-tweet">
        <a href={tweetUrl}></a>
      </blockquote>
    </div>
  );
};

export default LatestXPost;
