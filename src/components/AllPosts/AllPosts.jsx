import React from 'react'
import './AllPosts.css'
import { useEffect, useState } from 'react'
import { retrievePosts } from '../../services/Post/RetrievePost'
import { Post } from '../Post/Post'

export default function AllPosts() {
  
  const [post, setPosts] = useState([])

  useEffect(() => {
  
    return async() => {
      const posts = await retrievePosts()
      setPosts(posts)
    }
  }, [])
  
  function TestLogin(){
    
    localStorage.getItem("username")
  }

  return (
    <>
      {post.map( (posts) => { 
        return (
          <Post key={posts.id_post} description={posts.description} image={posts.image} />
        )
      } )}
    </>
  )
}
