import React, { useState } from 'react'
import { retrieveUserPassword } from '../../services/User/retrieveUserPassword';
import './Login.css'

export default function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginCorrecto, setLoginCorrecto] = useState(true)

  function OnchangeUsername(e){
    setUsername(e.target.value);
  }

  function OnchangePassword(e){
    setPassword(e.target.value);
  }

  async function OnClickRegister(e){

    e.preventDefault()
    localStorage.setItem("username", username)
    const passwOrigin = await retrieveUserPassword("usuario")
    if(password == passwOrigin){
      localStorage.setItem("password", password)
      setLoginCorrecto(true);
      //window.location.reload(false);
    }
    else{
      setLoginCorrecto(false);
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
      {loginCorrecto ? '' : <div>Error en el registro</div>}
    </form>
  )
}
