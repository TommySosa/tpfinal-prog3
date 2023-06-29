import { useState } from 'react';
import BotonGoles from './botones/BotonGoles';
import BotonGanaron from './botones/BotonGanaron'
import axios from 'axios';
import { useEffect } from 'react';
import BotonEmpataron from './botones/BotonEmpataron';
import BotonPerdieron from './botones/BotonPerdieron';
import { Link } from 'react-router-dom';

const baseURL = 'http://localhost:3005/api/equipos';

function Tabla() {
    // const nombre = 'La Mafia FC'

    const [equipo, setEquipo] = useState(null)

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setEquipo(response.data);
        })
        .catch(error => {
                console.error(error);
        })
    }, [equipo])

    if (!equipo) return null

    return (
        <table className='table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Puntos</th>
                    <th>PJ</th>
                    <th>PG</th>
                    <th>PE</th>
                    <th>PP</th>
                    <th>GF</th>
                    <th>GC</th>
                    <th>Dif</th>
                    <th>Botones</th>
                    <th>Goles</th>
                </tr>
            </thead>
            <tbody>
                {equipo
                    .sort((a, b) => b.puntos - a.puntos) // Ordenar equipos por puntos de forma descendente
                    .map((equipo, index) => (
                        <tr key={equipo.id}>
                            <td>{index + 1}</td>
                            <td>{equipo.nombre}</td>
                            <td>{equipo.puntos}</td>
                            <td>{equipo.partidos_jugados}</td>
                            <td>{equipo.partidos_ganados}</td>
                            <td>{equipo.partidos_empatados}</td>
                            <td>{equipo.partidos_perdidos}</td>
                            <td>{equipo.goles_favor}</td>
                            <td>{equipo.goles_contra}</td>
                            <td>{equipo.diferencia_goles}</td>
                            <td>
                                <BotonGanaron texto="+3" clase="botones boton-pg" equipo={equipo} funcion=""></BotonGanaron>
                                <BotonEmpataron texto="+1" clase="botones boton-pe" equipo={equipo}></BotonEmpataron>
                                <BotonPerdieron texto="+0" clase="botones boton-pp" equipo={equipo}></BotonPerdieron>
                            </td>
                            <td>
                                <Link to={"/goles/{id}"}>

                                <BotonGoles></BotonGoles>
                                </Link>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>

    );
}

export default Tabla