import { MediumLogo } from '@/assets/icons'
import Link from 'next/link'
import React from 'react'
import { ArrowUpRight } from 'lucide-react'

function Header() {
    return (
        <div className='flex items-center justify-between p-4 bg-white border-b bg-opacity-40 backdrop-blur-md border-b-gray-400'>
            {/* left div */}
            <div>
                {/* website logo */}
                <Link href="/" >
                    <MediumLogo className='h-5' />
                </Link>
            </div>

            {/* right div */}
            <div className='flex items-center space-x-4 text-sm'>
                {/* navigation */}
                <div className='space-x-4'>
                    <Link href="/">Explore</Link>
                    <Link href="/">Write</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
                {/* button group */}
                <div className='flex items-center space-x-4 font-semibold text-green-600'>
                    <Link href="/">Sign In</Link>
                    <button className='flex items-center px-4 py-2 font-semibold text-white bg-green-600 rounded-full'>Get Started <span>< ArrowUpRight className='w-5 ml-1' /></span></button>
                </div>
            </div>

        </div>

    )
}

export default Header