import React from 'react'
import SemestersPage from '../Components/SemestersPage'

export const metadata = {
  title: "SXC - Keh Website",
  description: "Access comprehensive semester notes and academic resources from St. Xavier's College. Study materials and notes compiled by Rayan Karki for fellow students in Keh Website.",
  keywords: ["St Xavier's College", "semester notes", "academic notes", "study materials", "college resources", "Nepal", "SXC", "education", "Rayan Karki", "Keh Website"],
  openGraph: {
    title: "SXC Semester Notes - Keh Website",
    description: "Comprehensive academic notes and study materials from St. Xavier's College, compiled and shared by Rayan Karki in his site called Keh Website.",
    url: "https://www.rayankarki.com.np/sxc",
    type: "website"
  },
  alternates: {
    canonical: "/sxc"
  }
};

const page = () => {
  return (
    <>
      <div className='mt-4 text-center text-2xl text-dblue font-bold'>Semester Notes</div>
      <SemestersPage />
    </>

  )
}

export default page
