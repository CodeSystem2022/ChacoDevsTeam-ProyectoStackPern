import { pool } from '../db.js';
export const listarTareas = (req, res) => res.send('obteniendo tareas');



export const listarTarea = async (req, res ) => {
    const resultado = await pool.query('SELECT * FROM tareas WHERE id = $1', [req.params.id]);
    if (resultado.rowCount === 0) {
        return res.status(404).json({
            message: 'La tarea no existe'
        });
    }
    return res.json(resultado.rows[0]);
}

export const crearTarea = async(req, res)=>{
    const{titulo,descripcion}=req.body;
    res.send('creando tarea');
    try {
        const {rows} = await pool.query('INSERT INTO tareas(titulo, descripcion) VALUES ($1, $2)' ,[titulo,descripcion]);
    console.log(rows);  
    } catch (error) {
       console.log("Algo salió mal") 
    }
    
}

export const actualizarTarea = (req, res) => res.send('actualizando tarea unica');

export const eliminarTarea = (req, res) => res.send('eliminando tarea unica');