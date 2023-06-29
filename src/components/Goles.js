import axios from "axios";
import { useState } from "react";
function Goles(props) {
    const [favor, setFavor] = useState('')
    const [contra, setContra] = useState('')

    const { test, equipo } = props
    console.log('Objeto :' + equipo);
    const handleActualizarGoles = () => {
        const goles_contra = equipo.goles_contra + contra;
        const goles_favor = equipo.goles_favor + favor;

        axios.patch(`http://localhost:3005/api/equipos/${equipo.id}`,
            {
                goles_favor: goles_favor,
                goles_contra: goles_contra
            })
            .then(response => {
                // Actualizar el estado o realizar cualquier acción adicional después de la actualización exitosa
                console.log('Puntos actualizados correctamente:', response.data);
            })
            .catch(error => {
                // Manejar cualquier error que ocurra durante la petición
                console.error('Error al actualizar los puntos:', error);
            });
    };

    const onChangeContra = (e) => {
        const _contra = e.target.value
        setContra((prev) => {
            prev = ""
            return prev + _contra
        })
    }

    const onChangeFavor = (e) => {
        const _favor = e.target.value
        setFavor((prev) => {
            prev = ""
            return prev + _favor
        })
    }

    return (
        <form>
            <h1>Ingresa la cantidad de goles a favor y/o en contra</h1>
            <label htmlFor="goles_favor">Goles a favor</label>
            <input type="number" name="goles_favor" onChange={onChangeFavor} />
            <br />
            <label htmlFor="goles_favor">Goles a contra</label>
            <input type="number" name="goles_contra" onChange={onChangeContra} />
            <br />
            <button onClick={handleActualizarGoles}>Actualizar goles</button>
        </form>
    )
}

export default Goles