import React from 'react'

export function Pruebas() {

  const onPressButton = () => {
    console.log("Prueba");
  }

  return (
    <div>
        <button onClick={onPressButton}>Click Para comprobar</button>
    </div>
  )
}
