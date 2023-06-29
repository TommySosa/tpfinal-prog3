import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../../../src/index.css';
import { Link } from 'react-router-dom';

function BotonVer() {
    const { id } = useParams()
    const [equipo, setEquipo] = useState(null)
    const baseURL = `http://localhost:3005/api/equipos/${id}`;
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setEquipo(response.data);
        })
            .catch(error => {
                console.error(error);
            })
    }, [id])

    if (!equipo) return null
    return (
        <>
            <div className="tabla-container-1">
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

                            </tr>
                        </thead>
                        <tbody>
                            <tr key={equipo.id}>
                                <td></td>
                                <td>{equipo.nombre}</td>
                                <td>{equipo.puntos}</td>
                                <td>{equipo.partidos_jugados}</td>
                                <td>{equipo.partidos_ganados}</td>
                                <td>{equipo.partidos_empatados}</td>
                                <td>{equipo.partidos_perdidos}</td>
                                <td>{equipo.goles_favor}</td>
                                <td>{equipo.goles_contra}</td>
                                <td>{equipo.diferencia_goles}</td>
                            </tr>
                        </tbody>
                    </table>
                <Link to='/'>
                    <button>Volver</button>
                </Link>
            </div>
        </>
    )
}

export default BotonVer