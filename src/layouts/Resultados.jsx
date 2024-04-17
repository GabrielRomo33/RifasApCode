import React, { useState } from 'react'
import { RandomsNumbers } from '../Hooks/RandomsNumbers';



export const Resultados = ({NGanadores = 1, Participantes = 20}) => {
  const [ganadores = [], setGanadores] = useState();

  const handleGanadores = (NGanadores, Participantes) => {
    console.log(RandomsNumbers(0,Participantes,NGanadores));
  }
  return (
    <>
    <button onClick={handleGanadores(NGanadores,Participantes)}>
      Jugar
    </button>
      <h2>Ganadores:</h2>
        {/* <p>{NGanadores}</p>
        <p>{Participantes}</p> */}
    </>
  )
}
