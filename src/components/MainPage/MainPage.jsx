import React, { useEffect, useState } from 'react'
import { RetrieveThreads } from '../../services/Thread/RetrieveThreads'
import Thread from '../Thread/Thread'
import './MainPage.css'

export function MainPage() {
  
  const [threads, setThreads] = useState([{title: "a", date:"10"}])

  useEffect(() => {
  
    return async() => {
      const threads = await RetrieveThreads()
      setThreads(threads)
    }
  }, [])
  

  return (
    <>
      <h1>Foro</h1>
      {threads.map( (thread) => { 
        return (
          <Thread key={thread.id} title={thread.title} date={thread.date} />
        )
      } )}
    </>
  )
}
