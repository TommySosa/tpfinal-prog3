import { useState } from 'react';
import './forms.css';
import { Link, redirect } from 'react-router-dom';
import axios from 'axios';
function Registro() {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPass, setConfPass] = useState('')
    const [rol, setRol] = useState('')
    const [registro, setRegistro] = useState([])

    const baseURL = "http://localhost:3005/auth/registro"

    const onChangeNombre = (e) => {
        const nombre = e.target.value
        setNombre((prev) => {
            prev = ""
            return prev + nombre
        })
        console.log(nombre);
    }

    const onChangeEmail = (e) => {
        const email = e.target.value
        setEmail((prev) => {
            prev = ""
            return prev + email
        })
        console.log(email);
    }

    const onChangePass = (e) => {
        const pass = e.target.value
        setPassword((prev) => {
            prev = ""
            return prev + pass
        })
        console.log(password);
    }

    const onChangeConfPass = (e) => {
        const confPass = e.target.value
        setConfPass((prev) => {
            prev = ""
            return prev + confPass
        })
        console.log(confPass);
    }

    const onChangeRol = (e) => {
        const rol = e.target.value
        setRol((prev) => {
            prev = ""
            return prev + rol
        })
        console.log(rol);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(rol);
        onRegister()
    };

    function onRegister() {
        axios.post(baseURL, {
            "nombre": nombre,
            "email": email,
            "contraseña": password,
            "rol": rol
        }).then((response) => {
            setRegistro(response.data)
        })
    }
    return (
        <div className='form-container'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Formulario de registro</h1>
                <br />
                <label>Nombre</label>
                <input type='text' value={nombre} onChange={onChangeNombre}></input>

                <label>Email</label>
                <input type='email' value={email} onChange={onChangeEmail}></input>

                <label htmlFor='contraseña'>Contraseña</label>
                <input type='password' name='contraseña' value={password} onChange={onChangePass}></input>

                <label htmlFor='confcontraseña'>Confirmar contraseña</label>
                <input type='password' name='confcontraseña' value={confPass} onChange={onChangeConfPass}></input>
                {password !== confPass && confPass !== "" ? <p>Las contraseñas no coinciden</p>:null}
                <label>Rol</label>
                <select id='rol' value={rol} onChange={onChangeRol}>
                    <option value="Usuario">Usuario</option>
                    <option value="Administrador">Administrador</option>
                </select>

                <button type='submit'>Registrarse</button>
                <Link to={'/'}>
                    <button>
                        Volver
                    </button>
                </Link>
            </form>
        </div>
    )
}

export default Registro