import React from 'react'
import DrawingDisplay from '../Components/DrawingDisplay'

export const metadata = {
  title: "Digital Art & Drawings - Rayan Karki Portfolio",
  description: "Explore Rayan Karki's collection of digital artwork and creative drawings. Showcasing artistic skills and creative expression through various digital mediums.",
  keywords: ["Keh Website art", "Rayan art", "Rayan karki", "digital art", "drawings", "creative portfolio", "Rayan Karki art", "digital artwork", "creative design", "illustration"],
  openGraph: {
    title: "Digital Art & Drawings by Rayan Karki",
    description: "Discover Rayan Karki's creative digital artwork and drawing collection. A showcase of artistic talent and creative expression in Keh Website.",
    url: "https://www.rayankarki.com.np/drawings",
    type: "website",
    images: [
      {
        url: "/images/image-1.jpg",
        width: 1200,
        height: 630,
        alt: "Rayan Karki Digital Art Collection"
      }
    ]
  },
  alternates: {
    canonical: "/drawings"
  }
};

const page = () => {
  return (
    <>
    <DrawingDisplay />
    <div className='text-semibold text-gray-400 text-right p-2'>-By Rayan Karki</div>  
    </>

  )
}

export default page
