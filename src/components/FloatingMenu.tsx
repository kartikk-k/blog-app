import React from 'react'
import { MessageCircle, ThumbsUp } from 'lucide-react'


interface Props {
    likeCount: number,
    commentCount: number,
}

function FloatingMenu({ likeCount, commentCount }: Props) {
    return (
        <div className='sticky flex justify-center p-4 bottom-5'>
            <div className='flex gap-4 px-4 py-2 text-gray-500 bg-white border border-gray-400 rounded-full bg-opacity-60 backdrop-blur-lg'>
                <button className='flex items-center gap-2 duration-300 group hover:scale-110'>
                    <ThumbsUp className='w-5 group-hover:fill-gray-500' />
                    <span className='text-sm font-semibold '>{likeCount}</span>
                </button>
                <p className='font-semibold select-none'>|</p>
                <button className='flex items-center gap-2 duration-300 group hover:scale-110'>
                    <MessageCircle className='w-5 group-hover:fill-gray-500' />
                    <span className='text-sm font-semibold '>{commentCount}</span>
                </button>
            </div>
        </div>
    )
}

export default FloatingMenu