import React from 'react'
import Image from 'next/image'
function SideNav() {

    const menuList=[
        {
            
        }
    ]

  return (
    <div className='h-screen p-5 border shadow-sm'>
      <Image
        src={'/main_logo.png'}
        alt='logo'
        width={160}
        height={120}
      />
    </div>
  )
}

export default SideNav
