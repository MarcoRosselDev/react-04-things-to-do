import './App.css';
import Logofreecodecamp from './componentes/LogoFcc';
import Tarea from './componentes/Tareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <Logofreecodecamp />
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <Tarea />
      </div>
    </div>
  );
}

export default App;