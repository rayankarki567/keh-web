"use client";
import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        { href: 'https://www.facebook.com/yan.reh55/', icon: FaFacebook },
        { href: 'https://www.instagram.com/mr_keh9/', icon: FaInstagram },
        { href: 'https://www.github.com/rayankarki567', icon: FaGithub},
      ];
  return (
    <footer className="mt-32 relative bg-cover bg-center bg-no-repeat py-16" style={{ backgroundImage: 'url(/images/wave-footer.svg)'}}>
      <div className="container px-16 flex justify-between items-center text-white text-center">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="Logo" width={60} height={60} />
          <div className="sm:text-xl font-serif md:text-3xl font-black">Keh!</div>
        </div>
        <div className="flex space-x-6">
        <div className='mt-2 flex space-x-4'>
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className='hover:scale-125 rounded-md p-1' target='_blank'>
                <link.icon size='1.1em' style={{ color: '#FFFFFF' }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
