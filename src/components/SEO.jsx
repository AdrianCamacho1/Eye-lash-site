import { useEffect } from "react";

// SEO component to handle dynamic meta tags
const SEO = () => {
  useEffect(() => {
    // Set basic meta tags
    document.title = "Lash Studio Miami | Premium Eyelash Extensions";

    // Meta description
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Miami's premier lash studio offering classic, volume, and hybrid lash extensions, lash lifts and tints by certified professionals. Book your appointment today!";
    document.head.appendChild(metaDescription);

    // Meta keywords
    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "lash extensions, lash studio miami, eyelash extensions, classic lashes, volume lashes, hybrid lashes, lash lift, lash tint, miami beauty";
    document.head.appendChild(metaKeywords);

    // OG tags for social sharing
    const ogTitle = document.createElement("meta");
    ogTitle.property = "og:title";
    ogTitle.content = "Lash Studio Miami | Premium Eyelash Extensions";
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement("meta");
    ogDescription.property = "og:description";
    ogDescription.content =
      "Transform your look with premium lash extensions from Miami's top-rated lash studio. Book now!";
    document.head.appendChild(ogDescription);

    const ogImage = document.createElement("meta");
    ogImage.property = "og:image";
    ogImage.content = "/og-image.jpg"; // Replace with actual image path
    document.head.appendChild(ogImage);

    const ogUrl = document.createElement("meta");
    ogUrl.property = "og:url";
    ogUrl.content = "https://lashstudiomiami.com"; // Replace with actual website URL
    document.head.appendChild(ogUrl);

    // Twitter Card tags
    const twitterCard = document.createElement("meta");
    twitterCard.name = "twitter:card";
    twitterCard.content = "summary_large_image";
    document.head.appendChild(twitterCard);

    // Canonical link
    const canonicalLink = document.createElement("link");
    canonicalLink.rel = "canonical";
    canonicalLink.href = "https://lashstudiomiami.com"; // Replace with actual website URL
    document.head.appendChild(canonicalLink);

    // Mobile viewport
    const viewport = document.createElement("meta");
    viewport.name = "viewport";
    viewport.content = "width=device-width, initial-scale=1, maximum-scale=5";
    document.head.appendChild(viewport);

    // Schema.org structured data for local business
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      name: "Lash Studio Miami",
      image: "https://lashstudiomiami.com/images/logo.png",
      url: "https://lashstudiomiami.com",
      telephone: "+17864002775",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Glam Street",
        addressLocality: "Miami",
        addressRegion: "FL",
        postalCode: "33130",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.7617,
        longitude: -80.1918,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "10:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "18:00",
        },
      ],
      priceRange: "$",
      servesCuisine: ["Lash Extensions", "Beauty Services"],
      description:
        "Premium lash extension studio in Miami offering classic, volume, and hybrid lashes by certified professionals.",
    });
    document.head.appendChild(schema);

    // Clean up function to prevent memory leaks
    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
      document.head.removeChild(ogTitle);
      document.head.removeChild(ogDescription);
      document.head.removeChild(ogImage);
      document.head.removeChild(ogUrl);
      document.head.removeChild(twitterCard);
      document.head.removeChild(canonicalLink);
      document.head.removeChild(viewport);
      document.head.removeChild(schema);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SEO;
