import React from 'react'



export const Resultados = ({Ganadores = 1, Participantes = 20}) => {
  return (
    <>
        <p>{Ganadores}</p>
        <p>{Participantes}</p>
    </>
  )
}
