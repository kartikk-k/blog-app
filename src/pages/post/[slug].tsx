import React, { useState, useEffect } from 'react'
import { sanityClient, urlFor } from '../../../sanity'
import { Post } from '../../../typings'
import { GetStaticProps } from 'next'
import Header2 from '@/components/Navbar'
import Head from 'next/head'
import { BookmarkPlus, Facebook, Linkedin, Share, Twitter } from 'lucide-react'
import FloatingMenu from '@/components/FloatingMenu'

interface Props {
    post: Post
}

function Post({ post }: Props) {
    console.log("single post: ", post)

    const [createdDate, setCreatedDate] = useState<String>()

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

                <div className='max-w-6xl grid-cols-9 gap-4 px-4 py-6 mx-auto md:py-12 md:grid lg:px-0'>

                    <div className='col-span-6'>

                        <div className='flex items-center justify-between'>
                            {/* post author info */}
                            <div className='flex items-center gap-4 '>
                                <img src={urlFor(post.author.image)} alt="" className='object-cover w-10 h-10 rounded-full ring-offset-1 ring ring-green-600' />
                                <div>
                                    <p className='text-sm font-semibold text-gray-600'>{post.author.name}</p>
                                    <p className='flex items-center text-xs text-gray-600'>{createdDate} <span className='px-2'>•</span> 8 min read</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4 '>
                                <div>
                                    {/* <div className='hidden gap-4 md:flex'>
                                    <Twitter className='w-5 text-gray-400 fill-gray-400 ' />
                                    <Linkedin className='w-5 text-gray-400 fill-gray-400' />
                                    <Facebook className='w-5 text-gray-400 fill-gray-400' />
                                </div> */}
                                    <Share className='w-5 text-gray-400 ' />
                                </div>
                                <BookmarkPlus className='w-5 text-gray-400' />
                            </div>
                        </div>

                        {/* post title and main image */}
                        <div className='py-8 space-y-4'>
                            <h1 className='text-2xl font-black text-gray-800'>{post.title}.</h1>
                            <p className='text-sm text-gray-600'>{post.description}</p>
                            <img src={urlFor(post.mainImage)} alt="" className='object-cover w-auto h-auto rounded-md' />
                        </div>

                        <div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ipsa magni, eveniet odio qui excepturi! Itaque nihil ab illum officiis iste nobis quasi, tempora alias excepturi possimus non, sunt praesentium reprehenderit, dolor accusantium fugit veritatis expedita? Ducimus mollitia aut totam quam, atque harum sit doloremque iusto voluptatem dolorem, fugiat dolores consequatur soluta ea delectus voluptatum alias! Architecto doloribus nesciunt sapiente illo aspernatur et fugiat mollitia nisi. Incidunt cum qui iure fugit ut aliquid autem ullam obcaecati blanditiis, odit minus magnam. Beatae similique tenetur dolor velit dolorum? Eaque, quibusdam? Dolorum assumenda in sunt quis ad accusamus unde vitae inventore ex itaque!</p>
                            <FloatingMenu likeCount={200} commentCount={20} />
                        </div>
                    </div>
                    <div className='hidden col-span-3 p-4 md:block'>
                        <p>Hello</p>
                    </div>
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
      name,
        image
    },
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