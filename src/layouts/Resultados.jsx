import React, { useState } from 'react'
import { RandomsNumbers } from '../Hooks/RandomsNumbers';



export const Resultados = ({NGanadores = 1, Participantes = 20}) => {
  const [texto, setTexto] = useState('');
  
  let tex = '';
  let numer = new Array(NGanadores).fill([]);
  const handleGanadores = (NGanadores, Participantes) => {
    let resulsdos = 0
    for (let index = 0; index < NGanadores; index++) {
      resulsdos = RandomsNumbers(0,Participantes);
      numer[index].push(resulsdos);
      tex = `Los ${index+1} Ganadroes son: ${numer[index]}`;
    }
    
    setTexto(tex);
    console.log(numer);
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
