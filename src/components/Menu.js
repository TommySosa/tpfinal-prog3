import { Route, BrowserRouter as Router, Routes, Link} from 'react-router-dom';
import { useState } from 'react';
function Menu(){    
    return(
        <div className='botones-container'>
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