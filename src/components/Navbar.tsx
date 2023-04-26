import React from 'react'
import { Menu, Edit2, ArrowUpRight, Search } from 'lucide-react'
import Link from 'next/link'
import { MediumLogo } from '@/assets/icons'

function Navbar() {
    return (
        <div className='sticky top-0 z-40 bg-white border-b backdrop-blur-lg border-b-gray-400 bg-opacity-40'>
            <div className='flex items-center justify-between p-2 mx-auto sm:p-4 max-w-7xl '>
                <div className='flex items-center gap-2 overflow-hidden sm:gap-4'>
                    {/* <Menu className='text-gray-800 cursor-pointer' /> */}
                    {/* <Link href="/" >
                        <MediumLogo className='h-4' />
                    </Link> */}
                    <Link href="/" className='text-xl font-black text-gray-800 cursor-pointer sm:text-2xl'>Medium</Link>
                </div>

                <div className='flex items-center justify-end gap-2 sm:gap-4'>
                    <Search className='w-5 text-gray-700' />
                    {/* <div className='flex items-center gap-2 px-4 py-1 text-gray-700 border-2 border-gray-400 rounded-xl'>
                        <Edit2 className='w-4' />
                        <p className='text-sm font-bold'>Write</p>
                    </div> */}
                    {/* <div className='flex items-center gap-2 text-sm font-semibold sm:gap-4 '>
                        <Link href="/" className='text-xs text-green-600 sm:text-base'>Sign In</Link>
                        <button className='flex items-center px-4 py-2 text-xs font-semibold text-white bg-green-600 rounded-full sm:text-base'>Get Started <span>< ArrowUpRight className='w-5 ml-1' /></span></button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar