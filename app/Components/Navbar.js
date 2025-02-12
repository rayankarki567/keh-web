import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className="bg-dblue text-white">
      <nav className="container mx-auto px-10 py-3 flex justify-between items-center">
        <Link href="/">
            <Image src="/logo.png" alt="Keh's Website!" width={40} height={40} />
        </Link>
        <div className="flex space-x-4">
          <Link href="/">
            <button className="rounded-xl px-2 py-1 transition duration-500 ease-in hover:bg-white hover:text-dblue">Home</button>
          </Link>
          <Link href="../drawings">
            <button className="rounded-xl px-2 py-1 transition duration-500 ease-in hover:bg-white hover:text-dblue">Drawings</button>
          </Link>
          <Link href="https://chat.rayankarki.com.np/">
            <button className="rounded-xl px-2 py-1 transition duration-500 ease-in hover:bg-white hover:text-dblue">Chat</button>
          </Link>
          <Link href="../sxc">
            <button className="rounded-xl px-2 py-1 transition duration-500 ease-in hover:bg-white hover:text-dblue">SXC</button>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar