import React from 'react'
import Image from 'next/image'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

function Header() {
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
      {/* Logo + Title section */}
      <div className='flex items-center space-x-3'>
        <Image 
          src={'./logo.svg'} 
          alt='logo'
          width={50}
          height={50}
        />
        <span className='text-orange-500 text-xl font-bold'>SpendWise</span>
      </div>

      <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
    </div>
  )
}

export default Header
