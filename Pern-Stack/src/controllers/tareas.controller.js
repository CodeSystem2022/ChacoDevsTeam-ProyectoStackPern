import { pool } from '../db.js';
export const listarTareas = (req, res) => res.send('obteniendo tareas');



export const listarTarea = async (req, res, next ) => {
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
               
        const resul = await pool.query('INSERT INTO tareas(titulo, descripcion) VALUES ($1, $2) RETURNING *' ,[titulo,descripcion]);
        res.json(resul.rows[0]);
        console.log(resul.rows[0]);
    } catch (error) {
        if (error.code === '23505'){
            return res.send({message:'ya existe una tarea con ese titulo'});
        }
       console.log(error);
       next(error); 
    } 
    
}

export const actualizarTarea = (req, res) => res.send('actualizando tarea unica');

export const eliminarTarea = (req, res) => res.send('eliminando tarea unica');