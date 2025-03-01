import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req, res) {
  const baseUrl = "https://shreesat-sahu.vercel.app"; // Ensure this is correct

  res.setHeader("Content-Type", "application/xml");
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url><loc>${baseUrl}/</loc></url>
      <url><loc>${baseUrl}/about</loc></url>
      <url><loc>${baseUrl}/contact</loc></url>
    </urlset>`);
}
