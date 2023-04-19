import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Header2 from '@/components/Navbar'
import Hero from '@/components/Hero'
import { sanityClient, urlFor } from '../../sanity'
import { Post } from '../../typings'
import PostsList from '@/components/PostsList'
import TrendingSection from '@/components/TrendingSection'
import Topics from '@/components/Topics'


interface Props {
  posts: [Post]
}

export default function Home({ posts }: Props) {
  console.log(posts)

  return (
    <>
      <Head>
        <title>Medium Blog</title>
        <meta name="description" content="Medium clone app made with NextJS." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white pb-80 max-w-screen'>
        {/* <Header /> */}
        <Header2 />
        <section className='overflow-hidden max-w-screen'>
          <Hero />

          <TrendingSection />

          <div className='flex flex-col-reverse grid-cols-5 mx-auto lg:flex-none lg:grid max-w-7xl'>
            <PostsList posts={posts} />

            <Topics />

          </div>
        </section>
      </main>
    </>
  )
}

export const getServerSideProps = async () => {

  const query = `
  *[_type == "post"]{
  _id,
    title,
  slug,
    author -> {
      name,
      image
    },
    description,
    mainImage,
    slug 
}`

  const posts = await sanityClient.fetch(query)
  console.log("posts: ", posts)
  return {
    props: {
      posts
    }
  }

}