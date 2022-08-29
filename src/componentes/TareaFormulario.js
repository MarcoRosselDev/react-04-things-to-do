import React, { useState } from 'react';
import '../hojas-de-estilos/TareaFormulario.css'

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault(); // previene que no recarge la pj al enviar
    
    const tareaNueva = {
      id: '12311',
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