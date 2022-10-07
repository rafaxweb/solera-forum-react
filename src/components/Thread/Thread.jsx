import React from 'react'
import { CreateNewPost } from '../CreateNewThread/CreateNewPost'
import './Thread.css'

export default function Thread(props) {
  const test = () => {
    console.log();
  }

  return (
    <div className='thread'>
      <button onClick={test} ></button>
      <CreateNewPost idThread={props.idThread} />

      <div className='thread-info'>
        <p className='thread-date'>{props.date}</p>
        <p className='thread-title'>{props.title}</p>
      </div>
      <div>
      </div>
    </div>
  )
}
