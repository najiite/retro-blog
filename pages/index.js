import Head from 'next/head'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Posts from '@/components/posts'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Retro Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"></link>
      </Head>

      <Navbar />
      <Hero />
      <Posts />
      <Footer />
    </>
  )
}