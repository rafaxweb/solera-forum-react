import React from 'react'
import './Post.css'

export function Post(props) {
  return (
    
    <div className='post'>
      <img className='imagen-consulta' src={props.image} />
      <p>{props.description}</p>
      <p>{props.category}</p>
    </div>
    
  )
}
