<<<<<<< Updated upstream
import React, { useState } from 'react'
import { createNewPost } from '../../services/Post/CreateNewPost';
import { retrievePosts } from '../../services/Post/RetrievePost';
import { retrieveUserUsername } from '../../services/User/retrieveUserUsername';

export function Pruebas() {

  const [prueba, setPrueba] = useState("Una prueba 2")

  const onPressButton = () => { 
    createNewPost(
      {
        "idPost": 50,
        "description": "Nuevo post",
        "category": "doubt",
        "image": null,
        "thread": {
            "idThread": 1
        },
        "public": true
    }
    );
=======
import React from 'react'
import { RetrieveBannedWords } from '../../services/BannedWords/RetrieveBannedWords'
import { createNewThread } from '../../services/Thread/CreateNewThread'
import { RetrieveThreads } from '../../services/Thread/RetrieveThreads'

export function Pruebas() {

  /*const onPressButtonBannedWords = () => {
    RetrieveBannedWords()
  }*/

  const onPressButtonRetrieveThreads = () => {
    RetrieveThreads()
  }

  const onPressButtonCreateThread = () => {
    createNewThread({id_thread: 2, title: "Prueba"})
>>>>>>> Stashed changes
  }

  return (
    <div>
<<<<<<< Updated upstream
        <button onClick={onPressButton}>Click Para comprobar {prueba}</button>
=======
        <button onClick={onPressButtonCreateThread}>Click Para comprobar</button>
>>>>>>> Stashed changes
    </div>
  )
}
