import "./globals.css";
import Navbar from "./Components/Navbar";

export const metadata = {
  title: "Keh Website!",
  description: "Welcome to Keh Website. It's just sthg like a portfolio (By Rayan Karki)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
