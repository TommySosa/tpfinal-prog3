import './App.css';
import Header from "./components/Header";
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="grid-layout">
      <div className='box header'>
        <Header/>
      </div>
      <div className='box menu'>
        <Menu></Menu>
      </div>
      <div className='box content'>
        
      </div>
      <div className='box lateral'>

      </div>
      <div className='box footer'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
