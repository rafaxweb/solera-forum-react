import React from 'react'
import './AllPosts.css'

export function AllPosts() {
  
  const [post, setPosts] = useState([])

  useEffect(() => {
  
    return async() => {
      const posts = await RetrievePost()
      setPosts(posts)
    }
  }, [])
  

  return (
    <>
      <h1>Foro</h1>
      {post.map( (posts) => { 
        return (
          <Thread key={posts.id_post} description={posts.description} image={posts.image} />
        )
      } )}
    </>
  )
}
