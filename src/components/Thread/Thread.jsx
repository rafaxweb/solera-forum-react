import React from 'react'
import AllPosts from '../AllPosts/AllPosts'
import './Thread.css'

export default function Thread(props) {
  return (
    <div className='thread'>
      <p className='thread-date'>{props.date}</p>
      <p className='thread-title'>{props.title}</p>
      <div>
        <AllPosts></AllPosts>
      </div>
    </div>
  )
}
