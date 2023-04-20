import React, { useEffect, useState } from 'react'
import { Post } from '../../typings'
import { sanityClient, urlFor } from '../../sanity'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
    postId: string,
    authorProfile: {
        _id: string,
        name: string,
        image: {
            asset: {
                _ref: string,
            }
        }
    }
    authorPosts: [],
}

interface authPostStructure {
    _id: string,
    title: string,
    description: string,
    mainImage: {
        asset: {
            _ref: string
        }
    },
    slug: {
        current: string
    }
}

function PostSidebar({ authorProfile, authorPosts, postId }: Props) {

    return (
        <div className='col-span-3 px-4 py-4 md:py-0 md:block'>
            <div className='top-32 md:sticky'>
                <Image src={urlFor(authorProfile.image.asset._ref)} width={500} height={500} className='object-cover w-20 h-20 rounded-full' alt={authorProfile.name} />

                <div className='py-4'>
                    <p className='font-bold text-gray-700 cursor-pointer hover:underline'>{authorProfile.name}</p>
                    <p className='text-sm text-gray-500'>120 Posts | 450 Likes</p>
                </div>

                <p className='text-sm'><span className='block text-sm font-bold text-gray-400'>About</span> Expert and Author in Applied Mathematics, Data Science, Statistics. Also writes History, Science, Culture. Find me on Twitter</p>

                <div className='py-4'>
                    <h3 className='text-sm font-bold text-gray-400'>More from {authorProfile.name}</h3>
                    <div className='py-2 space-y-4'>

                        {authorPosts?.length !== 0 && authorPosts?.map((authorPost: authPostStructure) => {
                            if (authorPost._id !== postId) {
                                return (
                                    <Link href={`/post/${authorPost.slug.current}`} key={authorPost._id} className='flex justify-between gap-2 cursor-pointer'>
                                        <div>
                                            <h1 className='flex-1 font-black text-gray-800 md:text-sm lg:text-base'>{authorPost.title}</h1>
                                            <p className='text-sm text-gray-500 md:text-xs lg:text-sm '>{authorPost.description}</p>
                                        </div>
                                        <Image src={urlFor(authorPost.mainImage)} height={80} width={80} className='object-cover w-20 h-20 rounded-md lg:w-20 lg:h-20 md:w-16 md:h-16' alt="" />
                                    </Link>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostSidebar