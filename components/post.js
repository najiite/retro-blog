import React from 'react'
import Link from 'next/link'
import { toPlainText, toTimestring } from '@/lib/functions'

const post = ({post}) => {
  return (
    <div>
        <div className="border-2 border-black m-2  grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 min-h-full">
                <div style={{ backgroundImage: `url(${post.mainImage.asset.url})`}} className="rounded-b-sm bg-cover bg-no-repeat bg-center"></div>
                <div className='lg:border-l-2  lg:border-black'>
                    <div>
                      <Link href={`/posts/[slug]`} as={`/posts/${post.slug.current}`}>
                        <h1 className='text-lg font-semibold lg:pt-5 p-5'>{post.title}</h1>
                      </Link>
                      <div className='p-5'>{toPlainText(post.body).substring(0, 150)}...</div>

                    </div>

                    <div className='flex justify-between p-5 text-sm'>
                      <h1 className='underline  underline-color decoration-4'><span>Article by {post.author.name}</span></h1>
                      <h1>{toTimestring(post._createdAt)}</h1>

                    </div>

                </div>
            </div>
    </div>
  )
}

export default post