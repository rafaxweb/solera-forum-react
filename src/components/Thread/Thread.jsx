import React, { useState } from 'react'
import { CreateNewPost } from '../CreateNewThread/CreateNewPost'
import './Thread.css'

export default function Thread(props) {

  const [createPostVisible, setCreatePostVisible] = useState(false)

  const onChangeVisible = () => {
    setCreatePostVisible(!createPostVisible);
  }

  return (
    <div className='thread'>
      {createPostVisible ? (
        <div>
        <CreateNewPost idThread={props.idThread} />
      </div>
      ) : "" }
      <button onClick={onChangeVisible} >Nuevo post</button>

      <div className='thread-info'>
        <p className='thread-date'>{props.date}</p>
        <p className='thread-title'>{props.title}</p>
      </div>
      <div>
      </div>
    </div>
  )
}
