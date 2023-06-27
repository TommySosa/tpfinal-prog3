import axios from 'axios'
function BotonGanaron(props){
    const {texto, clase, equipo} = props

    const handleActualizarPuntos = () => {
        const nuevoPuntos = equipo.puntos + 3;
        const nuevoPartidoJugado = equipo.partidos_jugados +1;
        const nuevoPartidoGanado = equipo.partidos_ganados + 1;

        axios.patch(`http://localhost:3005/api/equipos/${equipo.id}`,
            {
                puntos: nuevoPuntos,
                partidos_jugados: nuevoPartidoJugado,
                partidos_ganados: nuevoPartidoGanado
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
    return(
        <button className={clase} type="button" onClick={handleActualizarPuntos}>{texto}</button>
    )
}

export default BotonGanaron