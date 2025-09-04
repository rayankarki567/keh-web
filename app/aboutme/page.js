import React from 'react'
import Selfbout from '../Components/Selfbout';

export const metadata = {
  title: "About Me - Rayan Karki",
  description: "Learn more about Rayan Karki, a tech enthusiast and creative explorer from Nepal. Currently studying at St. Xavier's College with interests in web development and digital art displaying his contents in Keh Website.",
  openGraph: {
    title: "About Rayan Karki - Tech Enthusiast & Creative Explorer",
    description: "Discover Rayan Karki's journey as a student through Keh Website. Passionate about technology, web development, and creative digital art.",
    url: "https://www.rayankarki.com.np/aboutme",
    images: [
      {
        url: "/images/profile.png",
        width: 800,
        height: 800,
        alt: "Rayan Karki Profile Photo"
      }
    ]
  },
  alternates: {
    canonical: "/aboutme"
  }
};

const page = () => {
  return (
    <Selfbout noMargin={true} nooMarg={true}/>
  )
}

export default page