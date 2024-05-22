import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
// import { Provider, useDispatch, useSelector } from 'react-redux';
import VerSalas  from './Salas/salas';

let NotImplemented = () => {
  return (
    <>
      {/* link para usar redirecciones es la manera optima sin multiples peticiones */}
      <Link to="/">Ir a videos</Link>
      <h1>Esta pagina aun no esta lista</h1>
    </>
    )
}

let Error404 = () => {
  return (
    <>
      {/* link para usar redirecciones es la manera optima sin multiples peticiones */}
      <Link to="/">Regresar al inicio</Link>
      <h1>Esta pagina no existe - 404</h1>
    </>
    )
}

function App() {
  return (
    //el proyecto se debe encapsular dentro de browserrouter para generar distintas rutas
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<VerSalas/>} />
        <Route path='salas/' element={<NotImplemented/>} />
        

        
        <Route path='*' element={<Error404/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
