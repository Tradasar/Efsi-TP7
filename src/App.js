import './App.css';
import React, { useState } from "react";
import ReactDOM from 'react-dom';

const [cita, setCitas] = useState([]);

function borrarCita() {

}

function Cita(props) {
  return (
    <Cita class={cita}>
      <p>Mascota: <span>{props.Formulario.NombreMascota}</span></p>
      <p>Dueño: <span>{props.Formulario.NombreDueño}</span></p>
      <p>Fecha: <span>{props.Formulario.FechaCita}</span></p>
      <p>Hora: <span>{props.Formulario.HoraCita}</span></p>
      <p>Sintomas: <span>{props.Formulario.Sintomas}</span></p>
      <button class="Eliminar" onClick={borrarCita}>Eliminar ×</button>
    </Cita>
  );
}


//ReactDOM.render(<crearCita/>, document.getElementById("root"));  

function App() {




  
  const Formulario = () => {
    const [setCitas] = useState()
    const [mascota] = useState()
    const [propietario] = useState()
    const [fecha] = useState()
    const [hora] = useState()
    const [sintomas] = useState()
  
    return (
      <Formulario setCitas={setCitas}>
        <label>Nombre Mascota</label>
        <input type="text" useState={mascota} className="u-full-width" placeholder="Nombre Mascota"></input>
  
        <label>Nombre Dueño</label>
        <input type="text" useState={propietario} className="u-full-width" placeholder="Nombre dueño de la mascota"></input>
  
        <label>Fecha</label>
        <input type="date" useState={fecha} className="u-full-width"></input>
  
        <label>hora</label>
        <input type="time" useState={hora} className="u-full-width"></input>
  
        <label>Sintomas</label>
        <textarea useState={sintomas} className="u-full-width"></textarea>
  
        <button type="submit" className="u-full-width button-primary" onClick={Cita}>Agregar Cita</button>
      </Formulario>
    )
  }










  return (
    <div className="App">
      <header className="App-header">
        <div id="root">
          <h1>ADMINISTRADOR DE PACIENTES</h1>
          <div className="container">
            <div className="row">
              <div className="one-half column">
                <h2>Crear mi Cita</h2>
                <Formulario setCitas={setCitas}>

                </Formulario>
              </div>
              <div className="one-half column">
                <h2>Administra tus citas</h2>
                <Listado cita={cita} setCitas={setCitas}>

                </Listado>
              </div>
            </div>
          </div>
        </div>
        <script src="/static/js/bundle.js"></script><script src="/static/js/vendors~main.chunk.js"></script><script src="/static/js/main.chunk.js"></script>
      </header>
    </div>
  );
}

export default App;
