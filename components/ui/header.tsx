import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navitems from './Navitems'

const header = () => {
  return (
    <header className="sticky top-0 header">
        <div className='container header-wrapper'>
            <Link href="">
                <Image alt="Signalist logo" src="/assets/icons/logo.svg" width={140} height={32}
            className='w-auto h-8 cursor-pointer'></Image>
            </Link>
            <nav className='hidden sm:block'>
                <Navitems/>
            </nav>
            <nav className='block sm:hidden'>
                
            </nav>

        </div>
    </header>
  )
}

export default header