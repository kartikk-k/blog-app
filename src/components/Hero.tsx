import React from 'react'
import Image from 'next/image'
// import GradientBox from '../assets/gradient-box1.png'

function Hero() {
    return (
        <div className='flex justify-center p-10 bg-green-100'>
            <div className='w-full max-w-5xl p-4'>
                <div className='flex gap-4'>
                    <div className='space-y-8'>
                        <h1 className='font-serif text-2xl font-black text-center text-gray-800 sm:text-5xl'>Medium is a place to Read, Write & Connect on any topic</h1>
                        <div className='flex justify-center'>
                            <button className='px-4 py-2 text-white bg-green-600 rounded-full'>Start Exploring</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='w-full text-[200px]'>M</div> */}
        </div>
    )
}

export default Hero