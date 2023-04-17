import React from 'react'
import { TrendingUp, Verified } from 'lucide-react'


function TrendingSection() {
    return (
        <div className='p-4 mx-auto space-y-4 border-b max-w-7xl'>
            <div className='flex items-center gap-2 text-gray-600'>
                <TrendingUp className='w-5' />
                <h1 className='font-semibold'>Trending on Medium</h1>
            </div>

            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>

                <div className='flex gap-4 py-2 cursor-pointer'>
                    <p className='text-2xl font-black text-gray-300'>01</p>
                    <div className='space-y-2'>
                        <div className='flex items-center gap-4'>
                            <img className='object-cover rounded-full w-7 h-7' src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt="" />
                            <p className='flex items-center text-sm font-semibold text-gray-600'>
                                Health Wealth
                                <span className='px-1'>
                                    <Verified className='w-5 text-white fill-green-600' />
                                </span>
                            </p>
                        </div>
                        <p className='font-bold'>How ChatGPT helped detecting cancer 5 years earlier?</p>
                        <div className='flex items-center space-x-1 text-xs text-gray-500'>
                            <p>Apr 7</p>
                            <p>•</p>
                            <p>5 min read</p>
                        </div>
                    </div>
                </div>


                <div className='flex gap-4 py-2 cursor-pointer'>
                    <p className='text-2xl font-black text-gray-300'>02</p>
                    <div className='space-y-2'>
                        <div className='flex items-center gap-4'>
                            <img className='object-cover rounded-full w-7 h-7' src={"https://bit.ly/3A4SrzB"} alt="" />
                            <p className='text-sm font-semibold text-gray-600'>Sudo Programmer</p>
                        </div>
                        <p className='font-bold'>Guide to get started with Linux and stand out!!</p>
                        <div className='flex items-center space-x-1 text-xs text-gray-500'>
                            <p>May 12</p>
                            <p>•</p>
                            <p>10 min read</p>
                        </div>
                    </div>
                </div>

                <div className='flex gap-4 py-2 cursor-pointer'>
                    <p className='text-2xl font-black text-gray-300'>03</p>
                    <div className='space-y-2'>
                        <div className='flex items-center gap-4'>
                            <img className='object-cover rounded-full w-7 h-7' src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt="" />
                            <p className='flex items-center text-sm font-semibold text-gray-600'>
                                Health Wealth
                                <span className='px-1'>
                                    <Verified className='w-5 text-white fill-green-600' />
                                </span>
                            </p>
                        </div>
                        <p className='font-bold'>How ChatGPT helped detecting cancer 5 years earlier?</p>
                        <div className='flex items-center space-x-1 text-xs text-gray-500'>
                            <p>Apr 7</p>
                            <p>•</p>
                            <p>5 min read</p>
                        </div>
                    </div>
                </div>

                <div className='flex gap-4 py-2 cursor-pointer'>
                    <p className='text-2xl font-black text-gray-300'>04</p>
                    <div className='space-y-2'>
                        <div className='flex items-center gap-4'>
                            <img className='object-cover rounded-full w-7 h-7' src={"https://bit.ly/3A4SrzB"} alt="" />
                            <p className='text-sm font-semibold text-gray-600'>Sudo Programmer</p>
                        </div>
                        <p className='font-bold'>Guide to get started with Linux and stand out!!</p>
                        <div className='flex items-center space-x-1 text-xs text-gray-500'>
                            <p>May 12</p>
                            <p>•</p>
                            <p>10 min read</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TrendingSection