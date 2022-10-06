import React from 'react'
import './Thread.css'

export default function Thread(props) {
  return (
    <>
    <p>{props.title}</p>
    <p>{props.date}</p>
    </>
  )
}
