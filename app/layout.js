import "./globals.css";
import Navbar from "./Components/Navbar";

export const metadata = {
  title: "Keh Website!",
  description: "Just sthg like a portfolio",
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
