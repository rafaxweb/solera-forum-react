import React, { useState } from 'react'
import { retrieveUserPassword } from '../../services/User/retrieveUserPassword';
import './Login.css'

export default function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function OnchangeUsername(e){
    setUsername(e.target.value);
  }

  function OnchangePassword(e){
    setPassword(e.target.value);
  }

  //localStorage.setItem("", valor)
  //localStorage.getItem("")

  async function OnClickRegister(e){

    e.preventDefault()
    localStorage.setItem("username", username)
    console.log(await retrieveUserPassword("usuario"));
    if(password === retrieveUserPassword()){
      localStorage.setItem("password", password)
      //window.location.reload(false);
    }
    
  }

  return (
    <form>
      <div>Introduzca usuario</div>
      <input value={username} onChange={OnchangeUsername}></input>
      <div>Introduzca contraseña</div>
      <input value={password} onChange={OnchangePassword}></input>
      <div>
        <button onClick={OnClickRegister}>Registrarse</button>
      </div>
    </form>
  )
}
