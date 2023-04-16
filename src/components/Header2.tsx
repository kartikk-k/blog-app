import React from 'react'
import { Menu, Edit2, ArrowUpRight, Search } from 'lucide-react'
import Link from 'next/link'
import { MediumLogo } from '@/assets/icons'

function Header2() {
    return (
        <div className='sticky top-0 bg-white border-b backdrop-blur-md border-b-gray-400 bg-opacity-40'>
            <div className='flex items-center justify-between p-4 mx-auto max-w-7xl '>
                <div className='flex items-center gap-4 overflow-hidden'>
                    <Menu className='text-gray-800 cursor-pointer' />
                    {/* <Link href="/" >
                        <MediumLogo className='h-4' />
                    </Link> */}
                    <h1 className='text-2xl font-black text-gray-800 cursor-pointer'>Medium</h1>
                </div>

                <div className='flex items-center justify-end gap-4'>
                    <Search className='w-5 text-gray-700' />
                    {/* <div className='flex items-center gap-2 px-4 py-1 text-gray-700 border-2 border-gray-400 rounded-xl'>
                        <Edit2 className='w-4' />
                        <p className='text-sm font-bold'>Write</p>
                    </div> */}
                    <div className='flex items-center gap-4 text-sm font-semibold '>
                        <Link href="/" className='text-green-600'>Sign In</Link>
                        <button className='flex items-center px-4 py-2 font-semibold text-white bg-green-600 rounded-full'>Get Started <span>< ArrowUpRight className='w-5 ml-1' /></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header2