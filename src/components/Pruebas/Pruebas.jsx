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
  }

  return (
    <div>
        <button onClick={onPressButton}>Click Para comprobar {prueba}</button>
    </div>
  )
}
