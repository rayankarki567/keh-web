import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SelfAbout = ({ noMargin , nooMarg} ) => {
    const socialLinks = [
        { href: 'https://www.facebook.com/rayankarki123/', icon: FaFacebook },
        { href: 'https://www.instagram.com/mr_keh9/', icon: FaInstagram },
        { href: 'https://www.github.com/rayankarki567', icon: FaGithub},
        { href: 'https://www.linkedin.com/in/rayankarki567/', icon: FaLinkedin},
      ];
  return (
    <div className={`container mx-auto ${noMargin ? 'mt-0':'mt-48'} z-10`}>
      <div className={`text-3xl font-serif h2after text-center ${nooMarg ? 'mt-8' : 'mt-32'} font-extrabold text-dblue`}>About Me</div> 
      <div className='text-lg text-center text-gray-400 m-2 font-light'>Just a Lazy Enthusiast!</div>
      
      <div className='flex justify-center mt-8'>
      <div className='flex flex-col items-center w-1/2 z-50'>
          <Image src="/images/profile.png" alt="Rayan Karki" width={380} height={380} />
          <div className='text-dblue text-2xl font-bold'>Rayan Karki</div>
          <div className='text-md text-gray-600'>BSc.CSIT</div>

          <div className='mt-2 flex space-x-4'>
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className='hover:bg-gray-200 rounded-md p-0.5' target='_blank'>
                <link.icon size='1em' style={{ color: '#9ca3af' }} />
              </a>
            ))}
          </div>
        </div>

        <div className='text-gray-600 items-start justify-center text-left w-1/2 mt-14 pr-12 z-10'>
          <div className='my-4 font-semibold'>Hello! I'm Rayan Karki, an aspiring tech enthusiast. A Student at St. Xavier's College, Maitighar, Kathmandu</div>
          <div className='mb-4'>My journey into the world of technology is fueled by curiosity and creativity. From exploring the intricacies of cryptography, network and cyber security to the realm of web, I thrive on turning challenges into opportunities for growth.
          <br/>Beyond the technical landscape, I have a knack for creative problem-solving and enjoy turning abstract ideas into tangible solutions. When I'm not immersed in tech, you'll find me exploring latest trends, sketching anime character or portraits.<br />I'm passionate about continuous learning and always eager to collaborate, share knowledge, and connect with like-minded individuals. Feel free to reach out for tech discussions, collaboration, or a friendly chat about the wonders of the digital world!
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelfAbout;
