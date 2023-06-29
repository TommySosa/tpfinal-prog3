import './App.css';
import Header from "./components/Header";
import Menu from './components/Menu';
import Footer from './components/Footer';
import Tabla from './components/Tabla'
import Registro from './components/Registro'
import Login from './components/Login'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Goles from './components/Goles';
import BotonVer from './components/botones/BotonVer';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={
            <div className="grid-layout">
              <div className='box header'>
                <Header />
              </div>
              <div className='box menu'>
                <Menu></Menu>
              </div>
              <div className='box content'>
                <div className='tabla-container'>
                  <Tabla></Tabla>
                </div>
              </div>
              <div className='box footer'>
                <Footer></Footer>
              </div>
            </div>
          }>

          </Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='registro' element={<Registro></Registro>}></Route>
          <Route path='goles/:id' element={<Goles></Goles>}></Route>
          <Route path='equipos/:id' element={<BotonVer></BotonVer>}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
