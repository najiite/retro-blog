import Hero from '@/components/hero'
import Posts from '@/components/posts'
import Layout from '@/components/Layout'

import {client} from '@/backend/SanityClient';

export async function getStaticProps() {
  const query = `*[_type == "post"] | order(_createdAt desc)[1..4]{
    _id,
    _createdAt,
    title,
    slug,
    mainImage{
      asset->{
        _ref,
        url
      },
    },
    body,
    author->{
      name,
      image{
        asset->{
          _ref,
          url
          }, 
        },
      slug,
    },
  }`
  const posts = await client.fetch(query)

  return {
    props: {
      posts,
    },
 };
}

export default function Home({posts}) {
  return (
    <>
      <Layout>
        <Hero />
        <Posts posts={posts}  />
      </Layout >
    </>
  )
}
