'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from './ui/button';

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex flex-row justify-between items-center mt-8 px-4 md:px-8'>
      {/* Logo Section */}
      <div className='flex items-center'>
        <img className='w-16 h-16' src="https://res.cloudinary.com/dzvdh7yez/image/upload/v1723885833/logo-removebg-preview_kq0um2.png" alt="Logo" />
        <h1 className='text-blue-500 font-semibold text-xl ml-2'>ReachBot</h1>
      </div>
      
      {/* Button Section */}
      <div className='flex items-center'>
        <Button className='text-center p-3'><Link href="https://calendly.com/suhail_parry/30-minute-meeting-sf" target="blank">Book a Demo</Link></Button>
      </div>
    </div>
  );
}

export default NavbarComponent;
