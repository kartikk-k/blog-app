import Navbar from '@/components/Navbar'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { sanityClient } from '../../../sanity'
import { Post } from '../../../typings'
import Posts from '@/components/Post'
import PostSidebar from '@/components/PostSidebar'


function index() {

    const [authorPosts, setAuthorPosts] = useState<[]>()

    let router = useRouter()

    let { author, category } = router.query
    console.log("author: ", author)

    useEffect(() => {
        if (!router.isReady) return
        getAuthorPosts()
    }, [router.isReady])

    const getAuthorPosts = async () => {
        const query = `*[_type == "post" && author->slug.current == $author ]{
            _id,
            title,
            description,
            mainImage,
            slug,
            author->{
                _id,
              name,
              image{asset},
              slug,
            },
            'categories': *[_type == "category" && _id in (*[_type == "post" && author->slug.current == $author][0].categories[]._ref)]{title, _id},
            author
        }`

        let posts = await sanityClient.fetch(query, {
            author: author
        })

        console.log("posts: ", posts)

        setAuthorPosts(posts)
    }

    return (
        <div>
            <Head>
                <title>{"Search"}</title>
                {/* <meta name="description" content={post.description} /> */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className='max-w-6xl grid-cols-9 gap-4 px-4 py-6 mx-auto md:py-12 md:grid'>
                <div className='col-span-6'>
                    {authorPosts && authorPosts.map((post: Post) => (
                        <Posts postData={post} key={post._id} />
                    ))}
                </div>
                {/* <PostSidebar authorProfile={} /> */}
            </main>
        </div>
    )
}

export default index