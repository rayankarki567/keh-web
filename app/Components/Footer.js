"use client";
import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        { href: 'https://www.facebook.com/rayankarki123/', icon: FaFacebook },
        { href: 'https://www.instagram.com/mr_keh9/', icon: FaInstagram },
        { href: 'https://www.github.com/rayankarki567', icon: FaGithub},
        { href: 'https://www.linkedin.com/in/rayankarki567/', icon: FaLinkedin},
      ];
  return (
    <footer className="mt-32 relative bg-cover bg-center bg-no-repeat " style={{ backgroundImage: 'url(/images/wave-footer.svg)'}}>
      <div className="container p-16 flex justify-between items-center text-white text-center">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="Keh Website!" width={60} height={60} />
          <div className="flex flex-col items-center sm:text-xl font-serif md:text-3xl font-black">
              <div>Keh!</div>
              <div className='sm:text-sm md:text-md font-normal font-sans'>Rayan Karki</div>
          </div>

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
      <div class="container text-right text-blue-950">
        <p>&copy; 2024 Keh Website. All rights reserved. <a href="pp.html">Privacy Policy</a></p>
      </div>
    </footer>
    
  );
};

export default Footer;
