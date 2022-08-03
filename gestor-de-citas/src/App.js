import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="root">
          <h1>ADMINISTRADOR DE PACIENTES</h1>
          <div class="container">
            <div class="row">
              <div class="one-half column">
                <h2>Crear mi Cita</h2>
                <form>
                  <label>Nombre Mascota</label>
                  <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" value=""></input>

                  <label>Nombre Dueño</label>
                  <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" value=""></input>
                
                  <label>Fecha</label>
                  <input type="date" name="fecha" class="u-full-width" value=""></input>

                  <label>hora</label>
                  <input type="time" name="hora" class="u-full-width" value=""></input>

                  <label>Sintomas</label>
                  <textarea name="sintomas" class="u-full-width"></textarea>

                  <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
                </form>
              </div>
              <div class="one-half column">
                <h2>Administra tus citas</h2>
                <div class="cita">
                  <p>Mascota: <span>Nina</span></p>
                  <p>Dueño: <span>Martin</span></p>
                  <p>Fecha: <span>2021-08-05</span></p>
                  <p>Hora: <span>08:20</span></p>
                  <p>Sintomas: <span>Le duele la pierna</span></p>
                  <button class="button elimnar u-full-width">Eliminar ×</button>
                </div>
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
