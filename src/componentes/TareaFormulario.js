import React, { useState } from 'react';
import '../hojas-de-estilos/TareaFormulario.css';
import {v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault(); // previene que no recarge la pj al enviar
    
    // npm install uuid
    // es un manejador de ids
    // esto garantiza que el id sera unico
    const tareaNueva = {
      id: uuidv4(),
      text: input,
      completada: false
    }
  }

  return (
    <form 
    className='tarea-formulario'
    onSubmit={manejarEnvio} >
      <input
        className="tarea-input"
        type='texto'
        placeholder='Escribe una Tarea'
        name='texto'
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;