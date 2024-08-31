import React from 'react'
import CreatePost from './blog/components/CreatePost'
import PostList from './blog/components/PostList'

export default function Blog() {
  return (
    <div className='p-5'>
      <CreatePost />
      <PostList />
    </div>
  )
}
