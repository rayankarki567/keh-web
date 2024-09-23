import "./globals.css";
import Navbar from "./Components/Navbar";

export const metadata = {
  title: "Keh Website!",
  description: "Welcome to Keh Website. It's just sthg like a portfolio (By Rayan Karki)",
  image: "/ss_landing.png", 
  type: "website",  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:type" content={metadata.type} />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
