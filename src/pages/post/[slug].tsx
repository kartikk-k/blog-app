import React, { useState, useEffect } from 'react'
import { sanityClient, urlFor } from '../../../sanity'
import { Post } from '../../../typings'
import { GetStaticProps } from 'next'
import Header2 from '@/components/Navbar'
import Head from 'next/head'
import { BookmarkPlus, Facebook, Linkedin, Share, Twitter } from 'lucide-react'
import FloatingMenu from '@/components/FloatingMenu'
import PortableText from 'react-portable-text'
import Comments from '@/components/Comments'
import PostSidebar from '@/components/PostSidebar'
import Image from 'next/image'

interface Props {
    post: Post
}

function Post({ post }: Props) {

    const [createdDate, setCreatedDate] = useState<String>()

    console.log("posts: ", post)

    useEffect(() => {
        let date = new Date(post._createdAt).toDateString().split(" ")
        setCreatedDate(date[1] + " " + date[2] + ", " + date[3])
    }, [post])


    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header2 />

                <div className='max-w-6xl grid-cols-9 gap-4 px-4 py-6 mx-auto md:py-12 md:grid'>

                    <div className='col-span-6'>

                        <div className='flex items-center justify-between'>
                            {/* post author info */}
                            <div className='flex items-center gap-4 '>
                                <Image width={500} height={500} src={urlFor(post.author.image)} alt="" className='object-cover w-10 h-10 rounded-full ring-offset-1 ring ring-green-600' />
                                <div>
                                    <p className='text-sm font-semibold text-gray-600'>{post.author.name}</p>
                                    <p className='flex items-center text-xs text-gray-600'>{createdDate} <span className='px-2'>•</span> 8 min read</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4 '>
                                <Share className='w-5 text-gray-400 cursor-pointer' />
                                <BookmarkPlus className='w-5 text-gray-400 cursor-pointer' />
                            </div>
                        </div>

                        {/* post title and main image */}
                        <div className='py-8 space-y-4'>
                            <h1 className='text-2xl font-black text-gray-800'>{post.title}.</h1>
                            <p className='text-sm text-gray-600'>{post.description}</p>
                            <Image height={1000} width={1000} src={urlFor(post.mainImage)} alt="" className='object-cover w-full h-full rounded-md' />
                        </div>

                        <div>
                            <PortableText
                                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                                content={post.body}
                                serializers={{
                                    h1: (props: any) => <h1 className='my-1 text-2xl font-black text-gray-800' {...props} />,
                                    h2: (props: any) => <h2 className='my-1 text-xl font-black text-gray-800' {...props} />,
                                    p: (props: any) => <p className='my-1 text-gray-700 ' {...props} />,
                                    normal: (props: any) => <p className='my-1 text-gray-700' {...props} />,
                                    link: (props: any) => <a className='text-blue-500 underline' {...props} />,
                                    blockquote: (props: any) => <p className='inline px-2 py-1 my-1 font-mono text-gray-600 bg-gray-200 rounded-md' {...props} />,
                                }}
                            />

                            {/* post categories!! */}
                            <div className='flex gap-2 py-8 border-t'>
                                {post.categories.map((category) => (
                                    <span
                                        key={category._id}
                                        className='px-4 py-1 text-xs bg-gray-200 rounded-full md:text-sm'
                                    >{category.title}</span>
                                ))}
                            </div>

                            <FloatingMenu likeCount={200} commentCount={20} />
                        </div>

                        <hr className='border-gray-300' />
                        <Comments id={post._id} comments={post.comments} />
                    </div>

                    <PostSidebar authorProfile={post.author} authorPosts={post.authorPosts} postId={post._id} />

                </div>
            </main>
        </>
    )
}

export default Post


// get all post's slug
export const getStaticPaths = async () => {
    const query = `
        *[_type == "post"]{
        _id,
        slug{
            current
        }
    }`

    const posts = await sanityClient.fetch(query)

    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.slug.current
        }
    }))

    return {
        paths,
        fallback: "blocking",
    }
}

// get post by slug
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `
    *[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    body,
    slug,
    author -> {
        _id,
      name,
      image,
      slug,
    },
    'comments': *[  
        _type == "comment" &&
        post._ref == ^._id && 
        approved == true
        ],
    'authorPosts': *[_type == "post" && author._ref == author._ref]{
            _id,
            title,
            description,
            mainImage,
            slug,
        },
    'categories': *[_type == "category" && _id in (*[_type == "post" && slug.current == $slug][0].categories[]._ref)]{title, _id},
    description,
    mainImage,
    slug,
    body}`

    const post = await sanityClient.fetch(query, {
        slug: params?.slug
    })

    // if post is not found, return 404
    if (!post) {
        return {
            notFound: true
        }
    }

    // if post is found, return post
    return {
        props: {
            post
        },
        revalidate: 120,
    }
}