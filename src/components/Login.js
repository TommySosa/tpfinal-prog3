import './forms.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Login(){
    const [password, setPassword] = useState('')
    const [confPass, setConfPass] = useState('')
    const [login, setLogin] = useState([])
    const [mensajeError, setMensajeError] = useState('')
 
    const baseURL = 'http://localhost:3005/auth/login'

    const onChangePass = (e) => {
        const _pass = e.target.value
        setPassword((prev) => {
            prev = ""
            return prev + _pass
        })
    }

    const onChangeConfPass = (e) => {
        const confPass = e.target.value
        setConfPass((prev)=>{
            prev = ""
            return prev + confPass
        })
    }


    function onLogin(email, password) {    
            axios.post(baseURL, {
                "email": email,
                "contraseña": password,
            }).then((response) => {
                setLogin(response.data)
            }).catch((error) =>{
                if (error.response && error.response.status === 401){
                    setMensajeError('Contraseña incorrecta')
                }
                if(error.response && error.response.status === 404){
                    setMensajeError('Usuario no encontrado')
                }
            })
    }

    useEffect(()=>{
        console.log(login);
    },[login])
    return(
        <div className='form-container'>
            <form className='form' onSubmit={
                ev =>{
                    ev.preventDefault()
                    const email = ev.target.email.value
                    const password = ev.target.password.value
                    const consfPass = ev.target.confPass.value

                    setPassword(password)
                    setConfPass(consfPass)
                    onLogin(email, password)
                }
            }>
            <h1>Iniciar sesión</h1>
            <br/>
                <label>Email</label>
                <input type='email' name='email'></input>
                <label>Contraseña</label>
                <input type='password' name='password' onChange={onChangePass}></input>
                <label>Confirmar contraseña</label>
                <input type='password' name='confPass' onChange={onChangeConfPass}></input>
                {password !== confPass && confPass !== "" ? <p>Las contraseñas no coinciden</p> : null}

                {mensajeError!= '' ? <p>{mensajeError}</p> : null}
                <button type='submit'>Iniciar sesión</button>
                <Link to={'/'}>
                    <button>
                        Volver
                    </button>
                </Link>
            </form>
        </div>
    )
}

export default Login