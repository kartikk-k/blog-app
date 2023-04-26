import React from 'react'
import { Post } from '../../typings'
import { urlFor } from '../../sanity'
import Link from 'next/link'
import { Bookmark } from 'lucide-react'
import Image from 'next/image'

interface Props {
    postData: Post
}

function Posts({ postData }: Props) {


    return (
        <Link href={`post/${postData.slug.current}/`} className='flex items-center w-full gap-4 py-6'>
            <div className='w-full space-y-1'>
                <div className='flex items-center gap-2'>
                    {postData.author.image ? (
                        <Image height={500} width={500} src={urlFor(postData.author.image)} alt={postData.title} className='object-cover object-bottom rounded-full w-7 h-7' />
                    ) : (
                        <div className='bg-gray-400 rounded-full w-7 h-7'></div>
                    )}
                    <p className='text-sm font-semibold text-gray-600'>{postData.author.name}</p>
                </div>

                <h1 className='text-lg font-bold text-gray-800 md:font-black md:text-xl'>{postData.title}.</h1>
                <p className='hidden text-gray-600 sm:block'>{postData.description}</p>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-wrap gap-4'>
                        <p className='flex items-center text-xs text-gray-600'>Apr 10 <span className='px-1'>•</span> 8 min read</p>
                        <div className='flex gap-2'>
                            {postData.categories.map((category) => (
                                <div key={category._id} className='px-3 py-1 text-xs bg-gray-200 rounded-full'>{category.title}</div>
                            ))}
                        </div>
                    </div>
                    <Bookmark className='text-gray-600' />
                </div>
            </div>
            {postData.mainImage && (
                <Image width={500} height={500} className='object-cover object-center rounded-md w-28 h-28 md:w-48 md:h-32' src={urlFor(postData.mainImage).toString()} alt="" />
            )}
        </Link>
    )
}

export default Posts