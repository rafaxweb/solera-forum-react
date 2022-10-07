import React, { useState } from 'react'
import { retrieveUserPassword } from '../../services/User/retrieveUserPassword';
import './Login.css'

export default function Login(props) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginCorrecto, setLoginCorrecto] = useState(true)

  function OnchangeUsername(e){
    setUsername(e.target.value);
  }

  function OnchangePassword(e){
    setPassword(e.target.value);
  }

  function OnCloseModal() {
    props.SetVisibilidad()
  }

  async function OnClickRegister(e){

    e.preventDefault()
    localStorage.setItem("username", username)

    const originalPassword = await retrieveUserPassword("usuario");
    if(password == originalPassword){
      localStorage.setItem("password", password)
      window.location.reload(false);
    }
    else{
      setLoginCorrecto(false);
    }
    
  }

  return (
    <form className='login'>
      <button onClick={OnCloseModal}>Cerrar</button>
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
