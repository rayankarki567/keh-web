import "./globals.css";
import Navbar from "./Components/Navbar";

export const metadata = {
  title: "Keh Website!",
  description: "Welcome to Keh Website. It's just sthg like a portfolio (By Rayan Karki)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/ss_landing.png" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
