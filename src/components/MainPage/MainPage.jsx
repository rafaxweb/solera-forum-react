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

    setLoginVision(true)
  }

  return (
    <>
      <h1>Foro</h1>
      {threads.map( (thread) => { 
        return (
          <>
            <Thread key={thread.id} title={thread.title} date={thread.date} />
          </>
        )
      } )}
      <button onClick={SetVisibilidad}>Iniciar sesion</button>
      {LoginVision ? <Login></Login> : ''}
    </>
  )
}
