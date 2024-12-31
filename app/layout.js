import "./globals.css";
import Navbar from "./Components/Navbar";

export const metadata = {
  title: "Keh Website!",
  description: "Welcome to Keh Website. It's just a simple portfolio (By Rayan Karki)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/ss_landing.png" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="portfolio, Mr Keh, Keh website, Keh, Rayan Karki, Rayan, Karki, Rayan portfolio, Rayan Karki website, creative portfolio" />
        <meta name="author" content="Rayan Karki" /> 
        <meta property="og:title" content={metadata.title} /> 
        <meta property="og:description" content={metadata.description} />
        <meta name="google-site-verification" content="Z7PnaEwYZ_BdYbDI1yEDzxuSjfUpAX3OyLueVztpPvE" />
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
