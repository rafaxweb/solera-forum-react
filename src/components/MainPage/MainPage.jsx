import React, { useEffect, useState } from 'react'
import { RetrieveThreads } from '../../services/Thread/RetrieveThreads'
import Login from '../Login/Login'
import Thread from '../Thread/Thread'
import './MainPage.css'

export function MainPage() {
  
  const [threads, setThreads] = useState([{title: "a", date:"10"}])
  const [LoginVision, setLoginVision] = useState(false)

  useEffect(() => {
  
    return async() => {
      const threads = await RetrieveThreads()
      setThreads(threads)
    }
  }, [])
  
  function SetVisibilidad(){

    setLoginVision(!LoginVision)
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
          <>
            <Thread key={thread.id} title={thread.title} date={thread.date} />
          </>
        )
      } )}
    </>
  )
}
