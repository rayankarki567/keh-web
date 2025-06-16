import "./globals.css";
import Navbar from "./Components/Navbar";

export const metadata = {
  title: "Keh Website!",
  description: "Welcome to Keh Website. It's just a simple portfolio (By Rayan Karki)",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Keh Website",
    "url": "https://www.rayankarki.com.np"
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rayan Karki",
    "url": "https://www.rayankarki.com.np/aboutme",
    "sameAs": [
      "https://github.com/rayankarki567/",
      "https://www.linkedin.com/in/rayankarki567/",
      "https://www.instagram.com/mr_keh9/"
    ],
    "description": "Rayan Karki is a tech enthusiast and creative explorer from Nepal.",
    "jobTitle": "Student",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "St. Xavier's College"
    }
  }
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
    <title>{metadata.title}</title>

    
        <meta property="og:site_name" content="Keh Website" />
        <meta property="og:image" content="/ss_landing.png" />
        <meta property="og:title" content={metadata.title} /> 
        <meta property="og:url" content="https://www.rayankarki.com.np" />
        <meta property="og:description" content={metadata.description} />
    
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="portfolio, Mr Keh, Keh website, Keh, Rayan Karki, Rayan, Karki, Rayan portfolio, Rayan Karki website, creative portfolio" />
        <meta name="author" content="Rayan Karki" /> 
        <meta name="google-site-verification" content="Z7PnaEwYZ_BdYbDI1yEDzxuSjfUpAX3OyLueVztpPvE" />
    
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
        <script src="https://accounts.google.com/gsi/client" async defer></script>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
