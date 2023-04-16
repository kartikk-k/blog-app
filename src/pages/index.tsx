import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Header2 from '@/components/Header2'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Medium Blog</title>
        <meta name="description" content="Medium clone app made with NextJS." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='min-h-screen bg-white'>
        {/* <Header /> */}
        <Header2 />
        <Hero />
        {/* <div className='min-h-[120vh]'></div> */}
      </main>
    </>
  )
}
