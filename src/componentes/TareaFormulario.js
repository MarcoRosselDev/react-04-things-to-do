import React, { useState } from 'react';
import '../hojas-de-estilos/TareaFormulario.css'

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
    console.log(e.target.value);
  }

  const manejarEnvio = e => {
    const tareaNueva = {
      id: '12311',
      text: 'Hola'
    }
  }

  return (
    <form className='tarea-formulario'>
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