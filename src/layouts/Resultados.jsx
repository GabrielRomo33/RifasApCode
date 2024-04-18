import React, { useState } from 'react'
import { RandomsNumbers } from '../Hooks/RandomsNumbers';



export const Resultados = ({NGanadores = 1, Participantes = 20}) => {
  const [texto, setTexto] = useState('');
  
  let tex = '';
  let numer = [];
  let repetidos = [];
  const handleGanadores = (NGanadores, Participantes) => {
    let resulsdos = 0
    for (let index = 0; index < NGanadores; index++) {
      resulsdos = RandomsNumbers(1,Participantes, repetidos);
      numer.push(resulsdos);
      repetidos.push(resulsdos);
      // tex += `El Ganador ${index+1} es: ${numer[index]}, `;
      tex = `Los ${index+1} Ganadores son: ${numer}`;
    }
    
    setTexto(tex);
    // console.log(numer);
    // document.getElementById('numeros').innerHTML += toString(RandomsNumbers(0,Participantes,NGanadores));
  }
  return (
    <>
    <button onClick={() => handleGanadores(NGanadores,Participantes)}>
      Jugar
    </button>
      <h2>Ganadores:</h2>
      <p>{ texto }</p>
    </>
  )
}
