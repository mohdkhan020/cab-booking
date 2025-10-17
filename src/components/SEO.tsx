import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  url,
  image,
}) => (
  <Helmet>
    {/* General Meta Tags */}
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />

    {/* Canonical URL */}
    <link rel="canonical" href={url} />

    {/* Open Graph Meta Tags */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />

    {/* Twitter Card Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    {/* Structured Data */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "BroomCab",
        url: url,
        logo: image,
        description: description,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bareilly",
          addressRegion: "Uttar Pradesh",
          postalCode: "234001",
          addressCountry: "India",
        },
        telephone: "+918791796433",
        areaServed: ["Bareilly", "Noida", "Rishikesh","Nanital","Dhampur","Kanpur","Delhi","Char Dhaam","Kanpur"],
        openingHours: "Mo-Su 00:00-23:59",
        sameAs: [
            "https://www.facebook.com/BroomCab",  // Replace with your business's actual social media links
            "https://instagram.com/BroomCab",
            "https://youtube.com/BroomCab"
          ],
      })}
    </script>
  </Helmet>
);
export default SEO;
