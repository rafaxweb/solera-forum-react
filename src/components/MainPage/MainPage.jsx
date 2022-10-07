import React, { useEffect, useState } from 'react'
import { retrievePosts } from '../../services/Post/RetrievePost'
import { RetrieveThreads } from '../../services/Thread/RetrieveThreads'
import AllPosts from '../AllPosts/AllPosts'
import Login from '../Login/Login'
import Thread from '../Thread/Thread'
import './MainPage.css'

export function MainPage() {
  
  const [threads, setThreads] = useState([{title: "a", date:"10"}])
  const [LoginVision, setLoginVision] = useState(false)
  const [posts, setPosts] = useState([])

  useEffect(() => {
  
    return async() => {
      const threads = await RetrieveThreads()
      setThreads(threads)
    }
  }, [])
  
  function SetVisibilidad(){

    setLoginVision(!LoginVision)
  }

  async function onClickThread(id) {
    const tempPosts = await retrievePosts(id);  
    setPosts(tempPosts)
  }

  return (
    <>
      {LoginVision ? 
        (<div className='main-page__login'>
          <Login SetVisibilidad={SetVisibilidad}></Login> 
        </div>) : '' }
      <button onClick={SetVisibilidad}>Iniciar sesion</button>
      <h1>Foro</h1>
      {threads.map( (thread) => { 
        return (
          <div className='thread-buttom' onClick={ () => onClickThread(thread.idThread)} key={thread.id}>
            <Thread key={thread.id} title={thread.title} date={thread.date} />
          </div>
        )
      } )}
      <AllPosts posts={posts}/>
    </>
  )
}
