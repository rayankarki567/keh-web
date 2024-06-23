import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className="bg-dblue text-white">
      <nav className="container mx-auto px-10 py-3 flex justify-between items-center">
        <Link href="/">
            <Image src="/next.svg" alt="Logo" width={32} height={32} />
        </Link>
        <div className="flex space-x-4">
          <Link href="/">
            <button className="btn-nav rounded-xl px-2 py-1 transition duration-500 ease-in hover:bg-white hover:text-dblue">Home</button>
          </Link>
          <Link href="/">
            <button className="btn-nav rounded-xl px-2 py-1 transition duration-500 ease-in hover:bg-white hover:text-dblue">Drawings</button>
          </Link>
          <Link href="../SXC">
            <button className="btn-nav rounded-xl px-2 py-1 transition duration-500 ease-in hover:bg-white hover:text-dblue">SXC</button>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar