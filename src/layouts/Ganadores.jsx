import React, { useState } from 'react'
import { useCounter } from '../Hooks/useCounter'
import { Resultados } from './Resultados';


export const Ganadores = () => {
    
    const {counter,increment,decrement,reset} = useCounter(1);
    const [participantes, setParticipantes] = useState(30);
   
    const handleSelectChange = (event) => {
        setParticipantes(parseInt(event.target.value));
    };
    
  return (
    <>
    <div className="centrar">
        <h3>Numero de Ganadores:</h3>
        <div className="container">
            <span className='next' onClick={  () => increment() }></span>
            <span className='prev' onClick={  () => decrement() }></span>
            <div id="box">
                <span>{ counter }</span>
            </div>
        </div>
        <br />
        <button onClick={ () => reset() }> Reiniciar</button>
        {/* <br /> */}
        
        <h3>Participantes: </h3>
        <div className="selecPerticipantes">
         <select name="participantes" id="selectorPerticipantes" onChange={handleSelectChange}>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
            <option value="90">90</option>
            <option value="99">99</option>
            <option value="100">100</option>
         </select>
        </div>
        <br />
        <Resultados NGanadores={counter} Participantes={participantes}/>
    </div>
    </>
  )
}
