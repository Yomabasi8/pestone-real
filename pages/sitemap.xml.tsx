import { GetServerSideProps } from "next";
import { properties } from "../data/properties";
import { SITE_URL } from "../lib/seo";

const staticRoutes = [
  "",
  "/about",
  "/properties",
  "/brams-cityscape",
  "/land-banking",
  "/cashback",
];

function generateSiteMap() {
  const urls = [
    ...staticRoutes.map((route) => `${SITE_URL}${route}`),
    ...properties.map((property) => `${SITE_URL}/properties/${property.id}`),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
  </url>`
  )
  .join("\n")}
</urlset>`;
}

export default function SiteMap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/xml");
  res.write(generateSiteMap());
  res.end();

  return { props: {} };
};
