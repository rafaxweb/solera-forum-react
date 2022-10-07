import React from 'react'
import './Post.css'

export function Post(props) {
  return (
    <div className='post'>
      <p>{props.description}</p>
      <p>{props.image}</p> 
      <p>{props.category}</p>
    </div>
  )
}
