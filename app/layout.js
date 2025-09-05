import "./globals.css";
import Navbar from "./Components/Navbar";
import GoogleAnalytics from "../lib/GoogleAnalytics";

export const metadata = {
  metadataBase: new URL('https://www.rayankarki.com.np'),
  title: {
    default: "Keh Website - Creative Portfolio by Rayan Karki",
    template: "%s | Keh Website"
  },
  description: "Welcome to Keh Website. This is Rayan Karki's creative portfolio showcasing tech projects, digital art, and academic journey. Student at St. Xavier's College, passionate about technology and creative exploration.",
  keywords: ["Rayan Karki", "Rayan", "Karki", "Keh", "Keh Website", "portfolio", "tech student", "creative portfolio", "Nepal", "digital art", "web developer", "Mr Keh"],
  authors: [{ name: "Rayan Karki" }],
  creator: "Rayan Karki",
  publisher: "Rayan Karki",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rayankarki.com.np",
    siteName: "Keh Website - Rayan Karki Portfolio",
    title: "Keh Website - Creative Portfolio by Rayan Karki",
    description: "Explore Keh Website where you can find Rayan Karki's creative portfolio featuring tech projects, digital art.",
    images: [
      {
        url: "/ss_landing.png",
        width: 1200,
        height: 630,
        alt: "Rayan Karki Portfolio Landing Page"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "Z7PnaEwYZ_BdYbDI1yEDzxuSjfUpAX3OyLueVztpPvE"
  }
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Keh Website - Rayan Karki Portfolio",
    "alternateName": "Keh Website",
    "url": "https://www.rayankarki.com.np",
    "description": "Keh Website - Rayan Karki's creative portfolio showcasing tech projects, digital art, and academic journey.",
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.rayankarki.com.np/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rayan Karki",
    "alternateName": "Mr Keh",
    "url": "https://www.rayankarki.com.np",
    "image": "https://www.rayankarki.com.np/images/profile.png",
    "sameAs": [
      "https://www.linkedin.com/in/rayankarki567/",
      "https://www.instagram.com/mr_keh9/",
      "https://github.com/rayankarki567/"
    ],
    "description": "Tech enthusiast and creative explorer from Nepal, currently studying at St. Xavier's College. Passionate about web development, digital art, and technology innovation.",
    "jobTitle": "Student & Tech Enthusiast",
    "nationality": "Nepali",
    "birthPlace": {
      "@type": "Place",
      "name": "Nepal"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "St. Xavier's College",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kathmandu",
        "addressCountry": "Nepal"
      }
    },
    "knowsAbout": [
      "Web Development",
      "Digital Art",
      "Technology",
      "Creative Design",
      "Programming"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.rayankarki.com.np/aboutme"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Portfolio",
    "name": "Rayan Karki Creative Portfolio",
    "author": {
      "@type": "Person",
      "name": "Rayan Karki"
    },
    "url": "https://www.rayankarki.com.np",
    "description": "A comprehensive portfolio showcasing creative projects, digital artwork, and technical achievements.",
    "mainEntity": [
      {
        "@type": "CreativeWork",
        "name": "Digital Art Collection",
        "url": "https://www.rayankarki.com.np/drawings"
      },
      {
        "@type": "CreativeWork",
        "name": "Academic Notes & Resources",
        "url": "https://www.rayankarki.com.np/sxc"
      }
    ]
  }
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager (head) */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <script dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
            `
          }} />
        )}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/images/profile.png" as="image" />
        <link rel="preload" href="/ss_landing.png" as="image" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//accounts.google.com" />
        <link rel="dns-prefetch" href="//challenges.cloudflare.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="apple-touch-icon" href="/logo.png" />
        
        {/* Language and geo tags */}
        <meta name="language" content="English" />
        <meta name="geo.region" content="NP" />
        <meta name="geo.country" content="Nepal" />
        <meta name="geo.placename" content="Kathmandu" />
        
        {/* Additional SEO meta tags */}
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Legacy meta tags for compatibility */}
        <meta property="og:site_name" content="Keh Website" />
        <meta property="og:image" content="/ss_landing.png" />
        <meta property="og:title" content="Keh Website - Creative Portfolio by Rayan Karki" /> 
        <meta property="og:url" content="https://www.rayankarki.com.np" />
        <meta property="og:description" content="Welcome to Keh Website. This is Rayan Karki's creative portfolio showcasing tech projects, digital art, and academic journey." />
        
        <meta name="description" content="Welcome to Keh Website. This is Rayan Karki's creative portfolio showcasing tech projects, digital art, and academic journey. Student at St. Xavier's College, passionate about technology and creative exploration." />
        <meta name="keywords" content="portfolio, Mr Keh, Keh website, Keh, Rayan Karki, Rayan, Karki, Rayan portfolio, Rayan Karki website, creative portfolio, Nepal, digital art, web developer, tech student" />
        <meta name="author" content="Rayan Karki" /> 
        <meta name="google-site-verification" content="Z7PnaEwYZ_BdYbDI1yEDzxuSjfUpAX3OyLueVztpPvE" />
        
        {/* External scripts */}
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
        <script src="https://accounts.google.com/gsi/client" async defer></script>
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
                    height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
          </noscript>
        )}
        <Navbar />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
