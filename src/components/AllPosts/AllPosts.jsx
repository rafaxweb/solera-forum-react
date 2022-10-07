import React from 'react'
import './AllPosts.css'
import { useEffect, useState } from 'react'
import { retrievePosts } from '../../services/Post/RetrievePost'
import { Post } from '../Post/Post'

export default function AllPosts({posts}) {
  return (
    <>
      {posts.map( (actualPost) => {
        return (
           <Post key={actualPost.idPost} description={actualPost.description} image={actualPost.image} category={actualPost.category}/>
        )
          } )}
    </>
  )
}
