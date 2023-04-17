import React from 'react'
import { Globe2 } from 'lucide-react'

const tags = ['Programming', 'Technology', 'Medical', 'Science', 'Business', 'Design', 'Marketing', 'Music', 'Photography', 'Health', 'Fitness', 'Food', 'Travel', 'Lifestyle', 'Entertainment', 'Sports', 'Gaming']

function Topics() {

    return (
        <div className='col-span-2 p-4 space-y-4 md:p-8 max-w-7xl'>
            <div className='flex items-center gap-2 text-gray-600'>
                <Globe2 className='w-5' />
                <h1 className='font-semibold'>Discover by topic</h1>
            </div>
            <div className='flex w-screen pr-8 overflow-scroll md:block md:w-full md:overflow-hidden'>
                {tags.map((tag, index) => (
                    <div key={index} className='inline-block px-3 py-1 my-1 mr-2 text-xs bg-gray-200 rounded-full'>{tag}</div>
                ))}
            </div>
            <button className='text-sm font-semibold text-green-600 '>See All Topics</button>
        </div>
    )
}

export default Topics