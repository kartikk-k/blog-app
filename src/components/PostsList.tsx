import React from 'react'
import { Post } from '../../typings'
import Posts from './Post'

interface Props {
    posts: Array<Post>
}

function PostsList({ posts }: Props) {

    return (
        <div className='col-span-3 md:p-4'>
            <div className='grid-cols-7 px-4 m:p-6 sm:grid-cols-2 md:grid-cols-3'>
                {posts && posts.map((post) => (
                    <div key={post._id}>
                        <Posts postData={post} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostsList