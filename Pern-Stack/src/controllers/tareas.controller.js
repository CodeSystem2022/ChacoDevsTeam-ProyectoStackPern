
export const listarTareas = (req, res) => res.send('obteniendo tareas');

export const listarTarea = (req, res ) => res.send('obteniendo tarea unica');

export const crearTarea = (req, res) => {
    console.log(rec.body);
    res.send('ceando tarea');
}

export const actualizarTarea = (req, res) => res.send('actualizando tarea unica');

export const eliminarTarea = (req, res) => res.send('eliminando tarea unica');