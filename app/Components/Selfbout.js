import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SelfAbout = () => {
    const socialLinks = [
        { href: 'https://www.facebook.com/yan.reh55/', icon: FaFacebook },
        { href: 'https://www.instagram.com/yan.reh55/', icon: FaInstagram },
        { href: 'https://www.github.com/rayankarki567', icon: FaGithub},
      ];
  return (
    <div className='container mx-auto mt-48'>
      <div className='text-3xl font-serif h2after text-center mt-32 font-extrabold text-dblue'>About Me</div> 
      <div className='text-lg text-center text-gray-400 m-2 font-light'>Just a Lazy Enthusiast!</div>
      
      <div className='flex justify-center mt-8'>
      <div className='flex flex-col items-center mr-8 w-1/2'>
          <Image src="/images/profile.png" alt="Rayan Karki" width={380} height={380} />
          <div className='text-dblue text-2xl font-bold'>Rayan Karki</div>
          <div className='text-md text-gray-600'>BSc.CSIT</div>

          <div className='mt-2 flex space-x-4'>
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className='hover:bg-gray-200 rounded-md py-1' target='_blank'>
                <link.icon size='1em' style={{ color: '#9ca3af' }} />
              </a>
            ))}
          </div>
        </div>

        <div className='text-gray-600 items-start justify-center text-center w-1/2 mt-28'>
          <div className='mt-4 ml-8'>Student at St. Xavier's College, Maitighar, Kathmandu</div>
          <div>Amet aute dolore minim duis magna mollit quis ex nulla qui eiusmod do nulla. Magna veniam cupidatat fugiat aliqua occaecat adipisicing duis enim pariatur ea. Adipisicing do ad eu proident. Pariatur excepteur voluptate deserunt adipisicing. Ad officia fugiat deserunt elit ut ea amet deserunt magna. Proident non cillum cillum pariatur tempor cillum ex.</div>
        </div>
      </div>
    </div>
  );
}

export default SelfAbout;
