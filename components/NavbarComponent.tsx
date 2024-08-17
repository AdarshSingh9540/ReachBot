'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from './ui/button';

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
      <div className='flex flex-row justify-between items-center mt-8 px-4 md:px-8'>
        <div className='flex items-center ml-2 lg:ml-24   mb-4 md:mb-0'>
          <img className='w-16 h-16' src="/./logo_Reachbot.jpg" alt="Logo" />
          <h1 className='text-blue-500 font-semibold text-xl ml-1'>ReachBot</h1>
        </div>
        <div className='flex items-center  md:mt-0 lg:ml-16'>
          <Button className='text-center p-3'>Book a Demo </Button>
        </div>
      </div>
  );
}

export default NavbarComponent;
