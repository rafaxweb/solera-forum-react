import React from 'react'
import './AllPosts.css'
import { useEffect, useState } from 'react'
import { retrievePosts } from '../../services/Post/RetrievePost'
import { Post } from '../Post/Post'

export default function AllPosts({posts}) {
  
  const [allPosts, setAllPosts] = useState([])

  const test = () => {
    console.log(posts);
    setAllPosts(posts)
  }
  
  function TestLogin(){
    
    localStorage.getItem("username")
  }

  return (
    <>
      {posts.map( (actualPost) => {
        console.log(actualPost.description);
        return (
           <Post key={actualPost.idPost} description={actualPost.description} image={actualPost.image} category={actualPost.category}/>
        )
          } )}
    </>
  )
}
