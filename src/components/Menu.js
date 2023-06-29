import { Route, BrowserRouter as Router, Routes, Link} from 'react-router-dom';
function Menu(){
    return(
        <div>
            <Link to={"/login" }>
                <button>Iniciar sesión</button>
            </Link>
            <Link to={"/registro" }>
                <button>Registrarse</button>
            </Link>
            
        </div>
    )
}

export default Menu