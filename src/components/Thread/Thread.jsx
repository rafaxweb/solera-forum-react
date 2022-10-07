import React from 'react'
import './Thread.css'

export default function Thread(props) {
  return (
    <div className='thread'>
      <div className='thread-info'>
        <p className='thread-date'>{props.date}</p>
        <p className='thread-title'>{props.title}</p>
      </div>
      <div>
      </div>
    </div>
  )
}
