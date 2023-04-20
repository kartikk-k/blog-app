import React, { useEffect, useState } from 'react'
import { Post } from '../../typings'
import { sanityClient, urlFor } from '../../sanity'
import Link from 'next/link'

interface Props {
    post: Post
}

function PostSidebar({ post }: Props) {

    const [authorPosts, setAuthorPosts] = useState<Post[]>()

    useEffect(() => {
        getAuthPosts()
    }, [])

    const getAuthPosts = async () => {
        const query = `*[_type == "post" && author._ref == "${post.author._id}"]{
            _id,
            title,
            description,
            mainImage,
            slug,
        }`
        const res = await sanityClient.fetch(query)
        console.log(res)
        setAuthorPosts(res)
    }

    return (
        <div className='col-span-3 px-4 py-4 md:py-0 md:block'>
            <div className='top-32 md:sticky'>
                <img src={urlFor(post.author.image)} className='object-cover w-20 h-20 rounded-full' alt="" />

                <div className='py-4'>
                    <p className='font-bold text-gray-700 cursor-pointer hover:underline'>{post.author.name}</p>
                    <p className='text-sm text-gray-500'>120 Posts | 450 Likes</p>
                </div>

                <p className='text-sm'><span className='block text-sm font-bold text-gray-400'>About</span> Expert and Author in Applied Mathematics, Data Science, Statistics. Also writes History, Science, Culture. Find me on Twitter</p>

                <div className='py-4'>
                    <h3 className='text-sm font-bold text-gray-400'>More from {post.author.name}</h3>
                    <div className='py-2 space-y-4'>
                        {authorPosts?.length !== 0 && authorPosts?.map((authorPost) => {
                            if (authorPost._id !== post._id) {
                                return (
                                    <Link href={`/post/${authorPost.slug.current}`} key={authorPost._id} className='flex justify-between gap-2 cursor-pointer'>
                                        <div>
                                            <h1 className='flex-1 font-black text-gray-800 md:text-sm lg:text-base'>{authorPost.title}</h1>
                                            <p className='text-sm text-gray-500 md:text-xs lg:text-sm '>{authorPost.description}</p>
                                        </div>
                                        <img src={urlFor(authorPost.mainImage)} className='object-cover w-20 h-20 rounded-md lg:w-20 lg:h-20 md:w-16 md:h-16' alt="" />
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