import React from "react"
import { Helmet } from "react-helmet-async"
import { siteConfig } from "@/data/siteData"

function cleanUrl(path = "/") {
  const base = siteConfig.baseUrl.replace(/\/$/, "")
  const cleanPath = path === "/" ? "" : path
  return `${base}${cleanPath}`
}

export default function Seo({
  title,
  description,
  keywords,
  path = "/",
  schema = [],
}) {
  const url = cleanUrl(path)

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteConfig.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {schema.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  )
}